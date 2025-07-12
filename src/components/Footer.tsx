import { Circle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className="w-16 h-12  rounded flex items-center justify-center mb-4">
              <div className="relative">
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold ">🍋</span>
                </div>
              </div>
            </div>
          </div>

          {/* Doormat Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Doormat Navigation</h4>
            <ul className="space-y-2 text-lemon-green-100 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-white transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-white transition-colors">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#login" className="hover:text-white transition-colors">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-lemon-green-100 text-sm">
              <p>123 Main Street</p>
              <p>Chicago, IL 60601</p>
              <p>(555) 123-4567</p>
              <p>info@littlelemon.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Social Media Links</h4>
            <div className="space-y-2 text-lemon-green-100 text-sm">
              <a href="#" className="block hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
