import React from 'react'
import Navbar from './pages/Navbar'
import Header from './components/Header'
import RecommendedFood from './components/RecommendedFood'
import Service from './components/Service'
import NewFood from './components/NewFood'
import Service2 from './components/Service2'
import Special from './components/Special'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <RecommendedFood/>
      <Service/>
      <NewFood/>
      <Service2/>
      <Special/>
      <Footer/>
    </div>
  )
}

export default App
