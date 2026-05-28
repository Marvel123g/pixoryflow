import './App.css'
import HomeContent from './components/HomeContent'
import Nav from './components/Nav'

function App() {

  return (
    <div className=" font-[RobotoMono] relative min-h-screen">
      <img src="./background.gif" alt="background image" className='absolute h-full w-full -z-50' loading='eager'/>
      <div className='sm:p-5 z-50 flex flex-col min-h-screen'>
        {/* Using the Nav component that was imported */}
        <Nav/>

        {/* Using the HomeContent component that was imported */}
        <div className='grow flex items-center justify-center max-w-350'>
          <HomeContent/>
        </div>
      </div>
    </div>
  )
}

export default App