
interface HeaderProps {
  cartItemCount: number
}

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#reservations", label: "Reservations" },
  { href: "#order", label: "Order online" },
  { href: "#login", label: "Login" }
]

export default function Header({ cartItemCount }: HeaderProps) {
  return (
    <header className="bg-gradient-to-b from-neutral-950 to-teal-950 shadow-sm border-b">
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-28 h-8  rounded flex items-center justify-center">
              <div className="relative">
             
                <div className="absolute inset-0 flex flex-row items-center justify-center gap-2">
                  <span className="text-2xl font-bold ">🍋</span>
                  <span className="text-xs font-bold text-lemon-yellow-400 text-center">Little Lemon</span>
                  <span className="text-xs font-bold text-lemon-yellow-400 text-center">by Tadeo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-lemon-green-500 transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            

             <a href="#order" className=" hover:text-lemon-green-500 transition-colors font-medium cursor-pointer">
              Order online {cartItemCount > 0 && `(${cartItemCount})`}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
