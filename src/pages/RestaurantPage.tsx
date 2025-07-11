"use client"

import { useState } from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import SpecialsSection from "../components/SpecialsSection"
import TestimonialsSection from "../components/TestimonialsSection"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import CartSummary from "../components/CartSummary"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export default function RestaurantPage() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <div className="min-h-screen bg-white">
      <Header cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <HeroSection />
      <SpecialsSection onAddToCart={addToCart} />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
      <CartSummary
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  )
}
