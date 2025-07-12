"use client"

import { useState } from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import SpecialsSection from "../components/SpecialsSection"
import TestimonialsSection from "../components/TestimonialsSection"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import CartSummary from "../components/CartSummary"
import ReservationSection from "../components/ReservationSection"
import SuccesModal from "../components/SuccesModal"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export interface FormData {
 firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    numberOfPeople: number;
    specialComments: string;
}
export default function RestaurantPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    numberOfPeople: 1,
    specialComments: ""
  })

  const toggleSuccessModal = () => {
    setIsSuccessModalOpen((prev) => !prev)
  }
  
  const retrievedData = (data: FormData) => {
    setFormData({
      ...data,
    })
  }


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
    <div className="min-h-screen">
      <Header cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <HeroSection />
      <SpecialsSection onAddToCart={addToCart} />
      <ReservationSection 
        toggle={toggleSuccessModal}
        retrievedData={retrievedData}
      />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
      <CartSummary
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
      <SuccesModal
        isOpen={isSuccessModalOpen}
        onClose={toggleSuccessModal}
        formData={formData}
      />
    </div>
  )
}
