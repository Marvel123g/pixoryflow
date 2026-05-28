import './App.css'
import HomeContent from './components/HomeContent'
import Nav from './components/Nav'

function App() {

  return (
    <div className=" font-[RobotoMono] relative min-h-screen">
      <img src="./background.gif" alt="background image" className='absolute h-full w-full -z-50' loading='eager'/>
      <div className='p-5 z-50 flex flex-col gap-10 justify-between'>
        {/* Using the Nav component that was imported */}
        <Nav/>

        {/* Using the HomeContent component that was imported */}
        <HomeContent/>
      </div>
    </div>
  )
}

export default App
