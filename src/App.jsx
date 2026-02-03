import FramerComponent from '../framer/wrapper'
import Navbar from './components/Navbar'
import RecentProjects from './components/RecentProjects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import MainLayout from './layouts/MainLayout'
import Hero from './sections/Hero'
import FocusCards from './sections/FocusCards'

export default function App() {
  return (
    <div className='bg-[rgb(21,_19,_18)] min-h-screen w-full flex flex-col items-center relative'>
      <Navbar />
      
      <MainLayout>
        <Hero />
        <FocusCards />

        {/* Existing Framer Content (Legacy) - hidden */}
        {/* <div className="w-full overflow-hidden">
            <FramerComponent.Responsive 
              locale="en" 
              variants={{
                base: "VLsfsnnqq",
                sm: "VLsfsnnqq",
                md: "MPyOl2SBg",
                lg: "tsOoHuHnz",
                xl: "weKj8KEuk"
              }}
            />
         </div> */}

        <RecentProjects />
        <Experience />
        <Skills />
        <Education />
      </MainLayout>
    </div>
  )
}
