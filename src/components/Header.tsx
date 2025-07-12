import { Circle } from "lucide-react"

interface HeaderProps {
  cartItemCount: number
}

export default function Header({ cartItemCount }: HeaderProps) {
  return (
    <header className=" shadow-sm border-b">
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-8 bg-gray-300 rounded flex items-center justify-center">
              <div className="relative">
                <Circle className="h-6 w-6 text-lemon-yellow-400 fill-lemon-yellow-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold ">🍋</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className=" hover:text-lemon-green-500 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className=" hover:text-lemon-green-500 transition-colors font-medium">
              About
            </a>
            <a href="#menu" className=" hover:text-lemon-green-500 transition-colors font-medium">
              Menu
            </a>
            <a href="#reservations" className=" hover:text-lemon-green-500 transition-colors font-medium">
              Reservations
            </a>
            <a href="#order" className=" hover:text-lemon-green-500 transition-colors font-medium">
              Order online {cartItemCount > 0 && `(${cartItemCount})`}
            </a>
            <a href="#login" className=" hover:text-lemon-green-500 transition-colors font-medium">
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
