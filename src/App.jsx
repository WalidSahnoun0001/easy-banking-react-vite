import Hero from './components/Hero/Hero'
import LatArticles from './components/LatestArticles/LatArticles'
import Navbar from './components/Navbar/Navbar'
import Why from './components/Why/Why'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {

  const [open, setOpen] = useState(false)

  return (
    <main>
      <Navbar open={open} setOpen={setOpen} />
      <Hero open={open} />
      <Why />
      <LatArticles />
      <Footer />
    </main>
  )
}

export default App
