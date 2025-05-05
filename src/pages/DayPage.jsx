"use client"

import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

const DayPage = () => {
  const { day } = useParams()
  const dayNumber = Number.parseInt(day)

  // Blog content for each day
  const dayContent = {
    1: {
      title: "Exploring Manila's Heritage",
      location: "Intramuros & Rizal Park, Manila",
      date: "Day 1",
      readTime: "5 min read",
      heroImage: "/day1/intramuros (1).jpg",
      content: [
        {
          type: "paragraph",
          text: "Our journey begins in the heart of Manila, where history comes alive in the walled city of Intramuros and the iconic Rizal Park. These landmarks tell the story of Manila's rich cultural heritage and colonial past.",
        },
        {
          type: "heading",
          text: "Morning in Intramuros",
        },
        {
          type: "paragraph",
          text: "We started our day early at Intramuros, the historic walled city that was once the center of Spanish colonial rule in the Philippines. The morning light cast a golden glow on the centuries-old stone walls, creating a magical atmosphere.",
        },
        {
          type: "image",
          src: "/day1/intramuros (2).jpg",
          alt: "Intramuros Walls",
          caption: "The historic walls of Intramuros, built during the Spanish colonial period",
        },
        {
          type: "paragraph",
          text: "Walking through the cobblestone streets, we marveled at the well-preserved Spanish colonial architecture. The San Agustin Church, a UNESCO World Heritage site, stood as a testament to the city's religious heritage.",
        },
        {
          type: "image",
          src: "/day1/intramuros (3).jpg",
          alt: "Intramuros Architecture",
          caption: "The beautiful Spanish colonial architecture of Intramuros",
        },
        {
          type: "heading",
          text: "Exploring the Walled City",
        },
        {
          type: "paragraph",
          text: "As we wandered through the streets, we discovered charming plazas, historic buildings, and hidden gardens. Each corner of Intramuros seemed to have its own story to tell.",
        },
        {
          type: "image",
          src: "/day1/intramuros (4).jpg",
          alt: "Intramuros Streets",
          caption: "The charming streets of Intramuros, lined with historic buildings",
        },
        {
          type: "paragraph",
          text: "We visited the Manila Cathedral, a magnificent structure that has been rebuilt several times throughout history. Its intricate details and grand architecture left us in awe.",
        },
        {
          type: "image",
          src: "/day1/intramuros (5).jpg",
          alt: "Intramuros Plaza",
          caption: "The grand plaza in front of Manila Cathedral",
        },
        {
          type: "heading",
          text: "Afternoon at Rizal Park",
        },
        {
          type: "paragraph",
          text: "In the afternoon, we made our way to Rizal Park, a national park dedicated to the country's national hero, Dr. Jose Rizal. The park's manicured gardens and historical monuments provided a peaceful retreat from the bustling city.",
        },
        {
          type: "image",
          src: "/day1/Rizal Park (1).jpg",
          alt: "Rizal Park",
          caption: "The iconic Rizal Park, a symbol of Philippine nationalism",
        },
        {
          type: "paragraph",
          text: "We spent time exploring the various sections of the park, including the Rizal Monument, the Chinese Garden, and the Japanese Garden. Each area offered a unique perspective on the park's cultural significance.",
        },
        {
          type: "heading",
          text: "Sunset at the Bay",
        },
        {
          type: "paragraph",
          text: "As the day came to a close, we found ourselves at the bay area, watching the sun set over Manila Bay. The golden light reflected off the water, creating a perfect ending to our first day of exploration.",
        },
        {
          type: "image",
          src: "/day1/intramuros (11).jpg",
          alt: "Intramuros Sunset",
          caption: "A beautiful sunset view from Intramuros",
        },
        {
          type: "paragraph",
          text: "Our first day in Manila was a perfect introduction to the city's rich history and cultural heritage. From the colonial architecture of Intramuros to the national significance of Rizal Park, we experienced the many layers of Manila's story.",
        },
      ],
      gallery: [
        "/day1/intramuros (6).jpg",
        "/day1/intramuros (7).jpg",
        "/day1/intramuros (8).jpg",
        "/day1/intramuros (9).jpg",
        "/day1/intramuros (10).jpg",
      ],
    },
    2: {
      title: "Exploring Subic Bay",
      location: "Subic Bay Freeport Zone",
      date: "Day 2",
      readTime: "6 min read",
      heroImage: "/day2/subic convention hall (1).jpg",
      content: [
        {
          type: "paragraph",
          text: "Our second day took us to the Subic Bay Freeport Zone, a former US naval base transformed into a thriving economic and tourist destination. The area perfectly blends natural beauty with modern infrastructure.",
        },
        {
          type: "heading",
          text: "Subic Convention Hall",
        },
        {
          type: "paragraph",
          text: "We started our day at the Subic Convention Hall, an impressive venue that hosts various events and conferences. The architecture reflects the area's American heritage while incorporating modern design elements.",
        },
        {
          type: "image",
          src: "/day2/subic convention hall (2).jpg",
          alt: "Subic Convention Hall Interior",
          caption: "The grand interior of Subic Convention Hall",
        },
        {
          type: "paragraph",
          text: "The convention hall's spacious interiors and state-of-the-art facilities showcase Subic's transformation from a military base to a modern business hub.",
        },
        {
          type: "image",
          src: "/day2/subic convention hall (3).jpg",
          alt: "Convention Hall Details",
          caption: "Architectural details of the convention hall",
        },
        {
          type: "heading",
          text: "Communication Branch",
        },
        {
          type: "paragraph",
          text: "Next, we visited the Subic Communication Branch, which played a crucial role in the area's development. The facility represents the technological advancement of the freeport zone.",
        },
        {
          type: "image",
          src: "/day2/subic communication branch (1).jpg",
          alt: "Subic Communication Branch",
          caption: "The modern communication facility in Subic",
        },
        {
          type: "paragraph",
          text: "The communication center's infrastructure highlights how Subic has maintained its strategic importance while evolving into a modern business and tourism destination.",
        },
        {
          type: "image",
          src: "/day2/subic communication branch (2).jpg",
          alt: "Communication Equipment",
          caption: "Advanced communication equipment in Subic",
        },
        {
          type: "heading",
          text: "Modern Infrastructure",
        },
        {
          type: "paragraph",
          text: "Throughout the day, we were impressed by the seamless integration of historical structures with modern facilities. The Subic Bay Freeport Zone stands as a testament to successful urban redevelopment.",
        },
        {
          type: "image",
          src: "/day2/subic communication branch (5).jpg",
          alt: "Modern Infrastructure",
          caption: "Modern infrastructure in Subic Bay Freeport Zone",
        },
        {
          type: "paragraph",
          text: "The area's transformation from a military base to a freeport zone has created a unique blend of historical significance and contemporary development, making it a fascinating destination for both business and leisure.",
        },
        {
          type: "image",
          src: "/day2/subic convention hall (5).jpg",
          alt: "Subic Development",
          caption: "The ongoing development in Subic Bay Freeport Zone",
        },
      ],
      gallery: [
        "/day2/subic convention hall (6).jpg",
        "/day2/subic communication branch (3).jpg",
        "/day2/subic communication branch (4).jpg",
        "/day2/subic convention hall (4).jpg",
      ],
    },
    3: {
      title: "Cultural Heritage Tour",
      location: "Manila",
      date: "Day 3",
      readTime: "5 min read",
      heroImage: "/day3/National meuseum (1).jpg",
      content: [
        {
          type: "paragraph",
          text: "Our third day was dedicated to exploring Manila's rich cultural heritage, starting with the National Museum and continuing to the Manuel Quezon Memorial, immersing ourselves in the country's history and art.",
        },
        {
          type: "heading",
          text: "National Museum",
        },
        {
          type: "paragraph",
          text: "We began our day at the National Museum, a treasure trove of Philippine art, culture, and history. The museum's grand neoclassical architecture itself is a masterpiece, housing countless artifacts that tell the story of the Philippines.",
        },
        {
          type: "image",
          src: "/day3/National meuseum (2).jpg",
          alt: "National Museum Interior",
          caption: "The magnificent interior of the National Museum",
        },
        {
          type: "paragraph",
          text: "The museum's galleries showcase a diverse collection of artworks, from classical paintings to contemporary pieces, each telling a unique story about the country's artistic evolution.",
        },
        {
          type: "image",
          src: "/day3/National meuseum (3).jpg",
          alt: "Museum Exhibits",
          caption: "Fascinating exhibits at the National Museum",
        },
        {
          type: "heading",
          text: "Historical Artifacts",
        },
        {
          type: "paragraph",
          text: "One of the highlights was the collection of historical artifacts, including ancient pottery, traditional textiles, and religious art that showcase the rich cultural heritage of the Philippines.",
        },
        {
          type: "image",
          src: "/day3/National meuseum (4).jpg",
          alt: "Historical Collection",
          caption: "A glimpse into the museum's historical collection",
        },
        {
          type: "paragraph",
          text: "The museum's carefully curated displays provide visitors with a comprehensive understanding of the country's cultural development through the centuries.",
        },
        {
          type: "image",
          src: "/day3/National meuseum (5).jpg",
          alt: "Cultural Heritage",
          caption: "Showcasing the Philippines' rich cultural heritage",
        },
        {
          type: "heading",
          text: "Manuel Quezon Memorial",
        },
        {
          type: "paragraph",
          text: "In the afternoon, we visited the Manuel Quezon Memorial, dedicated to the first President of the Commonwealth of the Philippines. The memorial stands as a testament to his significant contributions to the nation.",
        },
        {
          type: "image",
          src: "/day3/manuel quezon (1).jpg",
          alt: "Manuel Quezon Memorial",
          caption: "The Manuel Quezon Memorial, honoring a great leader",
        },
        {
          type: "paragraph",
          text: "The memorial's architecture and exhibits provide insights into Quezon's life and his role in shaping the modern Philippines.",
        },
        {
          type: "image",
          src: "/day3/manuel quezon (2).jpg",
          alt: "Quezon's Legacy",
          caption: "Exploring the legacy of President Manuel Quezon",
        },
        {
          type: "heading",
          text: "Presidential Heritage",
        },
        {
          type: "paragraph",
          text: "A special highlight was viewing the collection of presidential cars, which offers a unique perspective on the country's political history and the evolution of transportation.",
        },
        {
          type: "image",
          src: "/day3/Presidential cars.jpg",
          alt: "Presidential Cars",
          caption: "Historic presidential vehicles on display",
        },
        {
          type: "paragraph",
          text: "The day's exploration of these cultural landmarks gave us a deeper appreciation for the Philippines' rich history and the people who shaped its destiny.",
        },
        {
          type: "image",
          src: "/day3/manuel quezon (3).jpg",
          alt: "Historical Significance",
          caption: "The historical significance of Manuel Quezon's contributions",
        },
      ],
      gallery: [
        "/day3/National meuseum (1).jpg",
        "/day3/National meuseum (2).jpg",
        "/day3/National meuseum (3).jpg",
        "/day3/National meuseum (4).jpg",
        "/day3/National meuseum (5).jpg",
      ],
    },
    4: {
      title: "Hytec Exploration",
      location: "Manila",
      date: "Day 4",
      readTime: "6 min read",
      heroImage: "/day4/Hightech (1).jpg",
      content: [
        {
          type: "paragraph",
          text: "Our fourth day was dedicated to exploring Manila's technological advancements and modern infrastructure. We visited various Hytec facilities that showcase the city's progress and innovation.",
        },
        {
          type: "heading",
          text: "Modern Technology Hub",
        },
        {
          type: "paragraph",
          text: "We started our day at a state-of-the-art technology hub, where we witnessed the integration of advanced systems and modern architecture. The facility represents Manila's commitment to technological advancement.",
        },
        {
          type: "image",
          src: "/day4/Hightech (2).jpg",
          alt: "Technology Hub",
          caption: "The modern technology hub showcasing Manila's innovation",
        },
        {
          type: "paragraph",
          text: "The facility's design incorporates sustainable features and smart technology, demonstrating how modern architecture can blend with environmental consciousness.",
        },
        {
          type: "image",
          src: "/day4/Hightech (3).jpg",
          alt: "Smart Infrastructure",
          caption: "Smart infrastructure and sustainable design features",
        },
        {
          type: "heading",
          text: "Innovation Center",
        },
        {
          type: "paragraph",
          text: "At the innovation center, we explored various technological solutions being implemented to improve urban living. The center serves as a showcase for future city development.",
        },
        {
          type: "image",
          src: "/day4/Hightech (4).jpg",
          alt: "Innovation Center",
          caption: "The innovation center's cutting-edge facilities",
        },
        {
          type: "paragraph",
          text: "The center's interactive displays and demonstrations gave us insight into how technology is shaping the future of urban development in Manila.",
        },
        {
          type: "image",
          src: "/day4/Hightech (5).jpg",
          alt: "Future Technology",
          caption: "Exploring future technology implementations",
        },
        {
          type: "heading",
          text: "Sustainable Development",
        },
        {
          type: "paragraph",
          text: "One of the most impressive aspects was the focus on sustainable development. The facilities we visited incorporated green technology and eco-friendly design principles.",
        },
        {
          type: "image",
          src: "/day4/Hightech (6).jpg",
          alt: "Sustainable Technology",
          caption: "Sustainable technology and green initiatives",
        },
        {
          type: "paragraph",
          text: "The day's exploration of Manila's Hytec facilities gave us a glimpse into the city's vision for a sustainable and technologically advanced future.",
        },
      ],
      gallery: [
        "/day4/Hightech (1).jpg",
        "/day4/Hightech (2).jpg",
        "/day4/Hightech (3).jpg",
        "/day4/Hightech (4).jpg",
        "/day4/Hightech (5).jpg",
        "/day4/Hightech (6).jpg",
      ],
    },
    5: {
      title: "Urban Transportation",
      location: "Manila",
      date: "Day 5",
      readTime: "5 min read",
      heroImage: "/day5/lrt (1).jpg",
      content: [
        {
          type: "paragraph",
          text: "Our fifth day was dedicated to exploring Manila's urban transportation systems, focusing on the Light Rail Transit (LRT) and traffic engineering solutions that keep the city moving.",
        },
        {
          type: "heading",
          text: "Light Rail Transit",
        },
        {
          type: "paragraph",
          text: "We started our day at the LRT station, where we observed the efficient operation of Manila's elevated railway system. The LRT serves as a crucial transportation backbone for the city's commuters.",
        },
        {
          type: "image",
          src: "/day5/lrt (2).jpg",
          alt: "LRT Station",
          caption: "The modern LRT station serving Manila's commuters",
        },
        {
          type: "paragraph",
          text: "The LRT system demonstrates how modern urban planning can provide efficient mass transportation while minimizing environmental impact.",
        },
        {
          type: "image",
          src: "/day5/lrt (3).jpg",
          alt: "LRT Operations",
          caption: "Efficient operations of the LRT system",
        },
        {
          type: "heading",
          text: "Traffic Engineering",
        },
        {
          type: "paragraph",
          text: "Next, we visited a traffic engineering center where we learned about the sophisticated systems managing Manila's complex traffic flow. The center uses advanced technology to monitor and optimize traffic patterns.",
        },
        {
          type: "image",
          src: "/day5/traffic engineering (1).jpg",
          alt: "Traffic Control Center",
          caption: "The traffic control center managing city traffic",
        },
        {
          type: "paragraph",
          text: "The traffic management system incorporates real-time monitoring and adaptive signal control to improve traffic flow throughout the city.",
        },
        {
          type: "image",
          src: "/day5/traffic engineering (2).jpg",
          alt: "Traffic Management",
          caption: "Advanced traffic management systems in action",
        },
        {
          type: "heading",
          text: "Urban Mobility Solutions",
        },
        {
          type: "paragraph",
          text: "The integration of various transportation modes, from the LRT to traffic management systems, showcases Manila's commitment to improving urban mobility and reducing congestion.",
        },
        {
          type: "image",
          src: "/day5/traffic engineering (3).jpg",
          alt: "Urban Mobility",
          caption: "Integrated urban mobility solutions",
        },
        {
          type: "paragraph",
          text: "Our exploration of Manila's transportation infrastructure revealed the complex systems working together to keep the city moving efficiently.",
        },
      ],
      gallery: [
        "/day5/lrt (1).jpg",
        "/day5/lrt (2).jpg",
        "/day5/lrt (3).jpg",
        "/day5/traffic engineering (1).jpg",
        "/day5/traffic engineering (2).jpg",
        "/day5/traffic engineering (3).jpg",
      ],
    },
    6: {
      title: "Baguio's Cultural Treasures",
      location: "Baguio City",
      date: "Day 6",
      readTime: "5 min read",
      heroImage: "/day6/minesview (1).jpg",
      content: [
        {
          type: "paragraph",
          text: "Our sixth day was spent exploring the cultural and natural treasures of Baguio City, from its famous viewpoints to historic landmarks and agricultural attractions.",
        },
        {
          type: "heading",
          text: "Mines View Park",
        },
        {
          type: "paragraph",
          text: "We started our day at Mines View Park, one of Baguio's most popular tourist spots. The park offers a breathtaking panoramic view of the Benguet mining district and the surrounding mountains.",
        },
        {
          type: "image",
          src: "/day6/minesview (2).jpg",
          alt: "Mines View Panorama",
          caption: "The stunning panoramic view from Mines View Park",
        },
        {
          type: "paragraph",
          text: "The cool mountain air and the spectacular vista made it the perfect spot to begin our day's exploration of Baguio's attractions.",
        },
        {
          type: "heading",
          text: "Chinese Bell Church",
        },
        {
          type: "paragraph",
          text: "Next, we visited the Chinese Bell Church, a unique religious site that combines Chinese and Filipino architectural elements. The temple's intricate design and peaceful atmosphere reflect the cultural diversity of Baguio.",
        },
        {
          type: "image",
          src: "/day6/chinese bell church (1).jpg",
          alt: "Chinese Bell Church",
          caption: "The beautiful Chinese Bell Church in Baguio",
        },
        {
          type: "paragraph",
          text: "The temple's ornate decorations and traditional Chinese architecture create a serene environment for meditation and reflection.",
        },
        {
          type: "image",
          src: "/day6/chinese bell church (2).jpg",
          alt: "Temple Details",
          caption: "Intricate details of the Chinese Bell Church",
        },
        {
          type: "heading",
          text: "Philippine Military Academy",
        },
        {
          type: "paragraph",
          text: "In the afternoon, we toured the Philippine Military Academy (PMA), known as the country's premier military training institution. The academy's historic buildings and well-maintained grounds showcase its proud heritage.",
        },
        {
          type: "image",
          src: "/day6/PMA (1).jpg",
          alt: "PMA Grounds",
          caption: "The historic grounds of the Philippine Military Academy",
        },
        {
          type: "paragraph",
          text: "The academy's architecture and monuments tell stories of courage, discipline, and national service.",
        },
        {
          type: "image",
          src: "/day6/PMA (2).jpg",
          alt: "PMA Architecture",
          caption: "The impressive architecture of the PMA",
        },
        {
          type: "heading",
          text: "Strawberry Farm",
        },
        {
          type: "paragraph",
          text: "We ended our day at the Strawberry Farm, where we experienced Baguio's famous agricultural heritage. The farm's terraced fields and fresh produce showcase the city's connection to the land.",
        },
        {
          type: "image",
          src: "/day6/strawberry farm.jpg",
          alt: "Strawberry Farm",
          caption: "The beautiful terraced fields of the Strawberry Farm",
        },
        {
          type: "paragraph",
          text: "Our day in Baguio revealed the city's rich cultural tapestry, from its natural wonders to its historic landmarks and agricultural heritage.",
        },
      ],
      gallery: [
        "/day6/minesview (1).jpg",
        "/day6/minesview (2).jpg",
        "/day6/chinese bell church (1).jpg",
        "/day6/chinese bell church (2).jpg",
        "/day6/PMA (1).jpg",
        "/day6/PMA (2).jpg",
        "/day6/strawberry farm.jpg",
      ],
    },
    7: {
      title: "Journey's End at NAIA",
      location: "Ninoy Aquino International Airport",
      date: "Day 7",
      readTime: "6 min read",
      heroImage: "/day7/Naia runway1.jpg",
      content: [
        {
          type: "paragraph",
          text: "Our final day brought us to the Ninoy Aquino International Airport (NAIA), where we reflected on our week-long journey through the Philippines. The airport, as the country's main gateway, symbolizes both endings and new beginnings.",
        },
        {
          type: "heading",
          text: "Modern Aviation Hub",
        },
        {
          type: "paragraph",
          text: "NAIA stands as a testament to the Philippines' modern infrastructure and its role as a key aviation hub in Southeast Asia. The airport's facilities and operations showcase the country's commitment to international connectivity.",
        },
        {
          type: "image",
          src: "/day7/Naia runway.jpg",
          alt: "NAIA Runway",
          caption: "The main runway of Ninoy Aquino International Airport",
        },
        {
          type: "paragraph",
          text: "As we watched planes take off and land, we couldn't help but reflect on the countless stories of arrivals and departures that unfold here daily.",
        },
        {
          type: "heading",
          text: "Gateway to the Philippines",
        },
        {
          type: "paragraph",
          text: "The airport serves as the first impression for many visitors to the Philippines and the last memory for those departing. Its significance goes beyond being just a transportation hub - it's a symbol of the country's hospitality and progress.",
        },
        {
          type: "image",
          src: "/day7/backgground.jpg",
          alt: "NAIA Terminal",
          caption: "The modern terminal facilities of NAIA",
        },
        {
          type: "paragraph",
          text: "The terminal's design and amenities reflect the warm Filipino welcome that visitors experience throughout their stay in the country.",
        },
        {
          type: "heading",
          text: "Reflections on the Journey",
        },
        {
          type: "paragraph",
          text: "As we prepared for our departure, we took time to reflect on the incredible experiences of the past week. From the historic streets of Intramuros to the Hytec facilities of Manila, from the cultural treasures of Baguio to the modern infrastructure of NAIA, we had witnessed the diverse facets of the Philippines.",
        },
        {
          type: "paragraph",
          text: "Our journey had shown us not just the country's famous landmarks and attractions, but also its people, culture, and progress. The memories we created would stay with us long after our departure, just as the Philippines continues to welcome new visitors through its main gateway.",
        },
      ],
      gallery: [
        "/day7/Naia runway1.jpg",
        "/day7/Naia runway.jpg",
        "/day7/backgground.jpg",
      ],
    },
  }

  // If day doesn't exist, show error
  if (!dayContent[dayNumber]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Day Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the day you're looking for.</p>
          <Link to="/" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  const currentDay = dayContent[dayNumber]

  // Navigation links
  const prevDay = dayNumber > 1 ? dayNumber - 1 : null
  const nextDay = dayNumber < 7 ? dayNumber + 1 : null

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={currentDay.heroImage}
          alt={currentDay.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center text-white z-10 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {currentDay.title}
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-4 text-sm md:text-base"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {currentDay.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {currentDay.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {currentDay.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Navigation */}
            <div className="flex justify-between mb-8">
              {prevDay ? (
                <Link
                  to={`/day/${prevDay}`}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Day {prevDay}</span>
                </Link>
              ) : (
                <div></div>
              )}

              {nextDay ? (
                <Link
                  to={`/day/${nextDay}`}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>Day {nextDay}</span>
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            {/* Content */}
            <article className="prose prose-emerald lg:prose-lg max-w-none">
              {currentDay.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      {item.text}
                    </motion.p>
                  )
                } else if (item.type === "heading") {
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="text-2xl font-bold mt-8 mb-4"
                    >
                      {item.text}
                    </motion.h2>
                  )
                } else if (item.type === "image") {
                  return (
                    <motion.figure
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="my-8"
                    >
                      <img src={item.src || "/placeholder.svg"} alt={item.alt} className="w-full h-auto rounded-lg" />
                      {item.caption && (
                        <figcaption className="text-center text-stone-500 mt-2">{item.caption}</figcaption>
                      )}
                    </motion.figure>
                  )
                }
                return null
              })}
            </article>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold mb-6">Photo Gallery</h3>
              <div className="image-gallery">
                {currentDay.gallery.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between mt-12 pt-8 border-t border-stone-200">
              {prevDay ? (
                <Link
                  to={`/day/${prevDay}`}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: Day {prevDay}</span>
                </Link>
              ) : (
                <Link
                  to="/"
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </Link>
              )}

              {nextDay ? (
                <Link
                  to={`/day/${nextDay}`}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>Next: Day {nextDay}</span>
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>Back to Home</span>
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default DayPage
