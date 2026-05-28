import './App.css'
import HomeContent from './components/HomeContent'
import Nav from './components/Nav'

function App() {
  

  return (
    <div className="bg-[url(./assets/background.gif)] bg-cover bg-center min-h-screen font-[RobotoMono] p-5">
      <Nav/>
      <HomeContent/>
    </div>
  )
}

export default App
