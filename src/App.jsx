import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Button, Card, Graph, Home, Image, Navbar, Text, Timer } from './components'

const App = () => {

  return (
    <>
      <Router>
        <section>
          <Navbar link1={'/'} link2={'/text'} link3={'card'} link4={'timer'} />
        </section>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/text' element={<Text />} />
            <Route path='/card' element={<Card />} />
            <Route path='/timer' element={<Timer />} />
          </Routes>
        </section>
      </Router>
    </>
  )
}

export default App