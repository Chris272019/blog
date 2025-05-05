import { Link } from "react-router-dom"
import { MapPin, Mail, Instagram, Twitter, Facebook } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <MapPin className="text-emerald-400" />
              <span className="font-playfair">Manila to Baguio</span>
            </Link>
            <p className="text-stone-300 mb-4">
              A 7-day journey through the beautiful landscapes of the Philippines, from the bustling city of Manila to
              the cool mountain city of Baguio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <li key={day}>
                  <Link to={`/day/${day}`} className="text-stone-300 hover:text-emerald-400 transition-colors">
                    Day {day}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="flex items-center gap-2 text-stone-300 mb-2">
              <MapPin size={16} />
              <span>Philippines</span>
            </p>
            <p className="flex items-center gap-2 text-stone-300">
              <Mail size={16} />
              <span>christiantan2719@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-6 text-center text-stone-400">  
        </div>
      </div>
    </footer>
  )
}

export default Footer
