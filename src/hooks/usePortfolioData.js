import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import localData from '../data/data.json'; // Fallback data

export const usePortfolioData = () => {
  const [data, setData] = useState(localData); // Initialize with local data for immediate render/fallback
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataRef = ref(db, 'data');

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        // Process data to handle Firebase array quirks (null at index 0)
        const processedData = {
          education: val.education ? val.education.filter(item => item !== null) : [],
          experience: val.experience ? val.experience.filter(item => item !== null) : [],
          projects: val.projects ? val.projects.filter(item => item !== null) : [],
          skills: val.skills ? val.skills.filter(item => item !== null) : []
        };
        setData(processedData);
      }
      setLoading(false);
    }, (err) => {
      console.error("Firebase fetch error:", err);
      setError(err);
      setLoading(false); // Stop loading on error, keeping local data if available
    });

    return () => unsubscribe();
  }, []);

  return { data, loading, error };
};
