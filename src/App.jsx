import FramerComponent from '../framer/wrapper'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='bg-[rgb(21,_19,_18)] min-h-screen w-full flex flex-col items-center relative'>
      <Navbar />
      <div className='w-full h-full max-w-[1440px] flex flex-col items-center'>
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
      </div>
    </div>
  )
}
