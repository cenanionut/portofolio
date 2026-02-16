import FramerComponent from '../framer/wrapper'
import Navbar from './components/Navbar'
import RecentProjects from './components/RecentProjects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import MainLayout from './layouts/MainLayout'
import Hero from './sections/Hero'
import FocusCards from './sections/FocusCards'

export default function App() {
  return (
    <div className='bg-[rgb(21,_19,_18)] min-h-screen w-full flex flex-col items-center relative'>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#FF6B00] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold">
        Skip to main content
      </a>

      <header className="w-full">
        <Navbar />
      </header>
      
      <MainLayout>
        <main id="main-content">
          <div className="flex flex-col gap-10 lg:gap-20">
            <Hero />
            <FocusCards />
            <RecentProjects />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </div>
        </main>
      </MainLayout>
    </div>
  )
}
