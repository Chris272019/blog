"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home } from "lucide-react"

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </motion.div>
  )
}

export default NotFound
