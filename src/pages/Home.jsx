"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api"

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["/manila.jpg", "/bagiou.jpg"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000) // Change image every 2 seconds

    return () => clearInterval(timer)
  }, [])

  const days = [
    {
      day: 1,
      title: "Exploring Manila's Heritage",
      description: "Discovering the historic walled city of Intramuros and the iconic Rizal Park.",
      image: "/day1/intramuros (1).jpg",
    },
    {
      day: 2,
      title: "Exploring Subic Bay",
      description: "Exploring the Subic Bay Freeport Zone's modern infrastructure and facilities.",
      image: "/day2/subic convention hall (1).jpg",
    },
    {
      day: 3,
      title: "Cultural Heritage Tour",
      description: "Visiting the National Museum and Manuel Quezon Memorial in Manila.",
      image: "/day3/National meuseum (1).jpg",
    },
    {
      day: 4,
      title: "Hytec Exploration",
      description: "Exploring Manila's technological advancements and modern infrastructure.",
      image: "/day4/Hightech (1).jpg",
    },
    {
      day: 5,
      title: "Urban Transportation",
      description: "Discovering Manila's LRT system and traffic engineering solutions.",
      image: "/day5/lrt (1).jpg",
    },
    {
      day: 6,
      title: "Baguio's Cultural Treasures",
      description: "Exploring Mines View Park, Chinese Bell Church, PMA, and Strawberry Farm.",
      image: "/day6/minesview (1).jpg",
    },
    {
      day: 7,
      title: "Journey's End at NAIA",
      description: "Reflecting on our journey at the Ninoy Aquino International Airport.",
      image: "/day7/Naia runway1.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  }

  const center = {
    lat: 15.5, // Center of Luzon
    lng: 120.5,
  }

  const locations = [
    { lat: 14.5995, lng: 120.9842, name: "Manila (Day 1)" }, // Manila
    { lat: 14.8386, lng: 120.2841, name: "Subic Bay (Day 2)" }, // Subic
    { lat: 14.5995, lng: 120.9842, name: "Manila (Day 3)" }, // Manila
    { lat: 14.5995, lng: 120.9842, name: "Manila (Day 4)" }, // Manila
    { lat: 14.5995, lng: 120.9842, name: "Manila (Day 5)" }, // Manila
    { lat: 16.4023, lng: 120.5960, name: "Baguio (Day 6)" }, // Baguio
    { lat: 14.5086, lng: 121.0197, name: "NAIA (Day 7)" }, // NAIA
  ]

  const path = locations.map(loc => ({ lat: loc.lat, lng: loc.lng }))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt={index === 0 ? "Manila" : "Baguio"}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center text-white z-10 px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Manila to Baguio
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A 7-day journey through the heart of Luzon
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            <Link
              to="/day/1"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              Start Reading
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentImage === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Journey Overview */}
      <section id="journey" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-lg text-stone-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Follow our 7-day adventure from the bustling streets of Manila to the cool mountains of Baguio City.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {days.map((day) => (
              <motion.div
                key={day.day}
                variants={itemVariants}
                className="day-card bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={day.image || "/placeholder.svg"}
                  alt={`Day ${day.day}: ${day.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-emerald-600 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">Day {day.day}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{day.title}</h3>
                  <p className="text-stone-600 mb-4">{day.description}</p>
                  <Link
                    to={`/day/${day.day}`}
                    className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              The Route
            </motion.h2>
            <motion.p
              className="text-lg text-stone-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our journey takes us through several key locations in Luzon, from Manila to Baguio City.
            </motion.p>
          </div>

          <motion.div
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? (
              <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={7}
                  options={{
                    styles: [
                      {
                        featureType: "all",
                        elementType: "geometry",
                        stylers: [{ color: "#f5f5f5" }],
                      },
                      {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#e9e9e9" }],
                      },
                    ],
                  }}
                >
                  {locations.map((location, index) => (
                    <Marker
                      key={index}
                      position={{ lat: location.lat, lng: location.lng }}
                      label={{
                        text: `Day ${index + 1}`,
                        color: "#ffffff",
                        className: "bg-emerald-500 px-2 py-1 rounded-full",
                      }}
                    />
                  ))}
                  <Polyline
                    path={path}
                    options={{
                      strokeColor: "#10b981",
                      strokeOpacity: 0.8,
                      strokeWeight: 3,
                    }}
                  />
                </GoogleMap>
              </LoadScript>
            ) : (
              <div className="aspect-[16/9] bg-stone-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <p className="text-stone-600">Map visualization coming soon</p>
                  <p className="text-sm text-stone-500 mt-2">Coming Soon</p>
                </div>
              </div>
            )}
          </motion.div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Manila (Day 1)", description: "Intramuros & Rizal Park" },
              { name: "Subic Bay (Day 2)", description: "Freeport Zone" },
              { name: "Manila (Day 3)", description: "National Museum" },
              { name: "Manila (Day 4)", description: "Hytec Facilities" },
              { name: "Manila (Day 5)", description: "LRT & Traffic" },
              { name: "Baguio (Day 6)", description: "Cultural Sites" },
              { name: "NAIA (Day 7)", description: "Journey's End" },
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <span className="font-medium block">{location.name}</span>
                  <span className="text-sm text-stone-500">{location.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start the Journey?
          </motion.h2>
          <motion.p
            className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Begin your virtual trip from Manila to Baguio and experience the beauty of the Philippines.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/day/1"
              className="bg-white text-emerald-600 hover:bg-emerald-100 px-8 py-3 rounded-full inline-flex items-center gap-2 transition-colors font-medium"
            >
              Start from Day 1
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
