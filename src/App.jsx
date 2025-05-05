"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import DayPage from "./pages/DayPage"
import NotFound from "./pages/NotFound"
import ScrollToTop from "./components/ScrollToTop"

// Animation wrapper component
const AnimationLayout = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/day/:day" element={<DayPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-400">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Manila to Baguio</h1>
          <p className="text-xl">A 7-day journey</p>
          <div className="mt-8 relative h-1 w-64 bg-white/30 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-white animate-loading-bar"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Navbar />
        <main className="flex-grow">
          <AnimationLayout />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
