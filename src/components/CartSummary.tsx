"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { X, Plus, Minus } from "lucide-react"
import Image from "next/image"
import type { CartItem } from "../pages/RestaurantPage"

interface CartSummaryProps {
  cart: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveFromCart: (id: number) => void
  onClearCart: () => void
}

export default function CartSummary({ cart, onUpdateQuantity, onRemoveFromCart, onClearCart }: CartSummaryProps) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const delivery = 5.0
  const total = subtotal + tax + delivery

  if (cart.length === 0) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 max-w-[90vw] z-50">
      <Card className="bg-white shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Your Order</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClearCart} className="text-gray-500 hover:text-red-500">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Cart Items */}
          <div className="max-h-60 overflow-y-auto space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-2 border rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  <p className="text-xs text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 w-6 p-0 bg-transparent"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm w-6 text-center">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 w-6 p-0 bg-transparent"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-red-500 hover:text-red-700 h-6 w-6 p-0"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-t pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Button className="w-full bg-lemon-yellow-400 hover:bg-lemon-yellow-500 text-lemon-green-500 font-semibold">
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
