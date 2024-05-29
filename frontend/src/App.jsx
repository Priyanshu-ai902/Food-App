import React from 'react'
import Navbar from './pages/Navbar'
import Header from './components/Header'
import RecommendedFood from './components/RecommendedFood'
import Service from './components/Service'
import NewFood from './components/NewFood'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <RecommendedFood/>
      <Service/>
      <NewFood/>
    </div>
  )
}

export default App
