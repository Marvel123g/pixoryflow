import './App.css'
import HomeContent from './components/HomeContent'
import Nav from './components/Nav'

function App() {

  return (
    <div className=" font-[RobotoMono] relative min-h-screen flex flex-col justify-between">
      <img src="./background.gif" alt="background image" className='absolute h-full w-full -z-50' loading='eager'/>
      <div className='p-5 z-50'>
        <Nav/>
        <HomeContent/>
      </div>
    </div>
  )
}

export default App
