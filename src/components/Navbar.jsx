"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, MapPin } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Day 1", path: "/day/1" },
    { name: "Day 2", path: "/day/2" },
    { name: "Day 3", path: "/day/3" },
    { name: "Day 4", path: "/day/4" },
    { name: "Day 5", path: "/day/5" },
    { name: "Day 6", path: "/day/6" },
    { name: "Day 7", path: "/day/7" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <MapPin className={`${scrolled ? "text-emerald-600" : "text-white"}`} />
          <span className={`${scrolled ? "text-emerald-600" : "text-white"} font-playfair`}>Manila to Baguio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                scrolled ? "text-stone-700 hover:text-emerald-600" : "text-white hover:text-emerald-200"
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <X className={`${scrolled ? "text-stone-700" : "text-white"} h-6 w-6`} />
          ) : (
            <Menu className={`${scrolled ? "text-stone-700" : "text-white"} h-6 w-6`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-stone-700 hover:text-emerald-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
