import { Circle } from "lucide-react"

interface HeaderProps {
  cartItemCount: number
}

export default function Header({ cartItemCount }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-8 bg-gray-300 rounded flex items-center justify-center">
              <div className="relative">
                <Circle className="h-6 w-6 text-lemon-yellow-400 fill-lemon-yellow-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-lemon-green-500">🍋</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-lemon-green-500 transition-colors font-medium">
              HOME
            </a>
            <a href="#about" className="text-gray-700 hover:text-lemon-green-500 transition-colors font-medium">
              ABOUT
            </a>
            <a href="#menu" className="text-gray-700 hover:text-lemon-green-500 transition-colors font-medium">
              MENU
            </a>
            <a href="#reservations" className="text-gray-700 hover:text-lemon-green-500 transition-colors font-medium">
              RESERVATIONS
            </a>
            <a href="#order" className="text-gray-700 hover:text-lemon-green-500 transition-colors font-medium">
              ORDER ONLINE {cartItemCount > 0 && `(${cartItemCount})`}
            </a>
            <a href="#login" className="text-gray-700 hover:text-lemon-green-500 transition-colors font-medium">
              LOGIN
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
