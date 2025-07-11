"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Calendar, Users } from "lucide-react"

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    comments: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Reservation submitted successfully!")
  }

  return (
    <section id="reservations" className="py-20 bg-lemon-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Make a Reservation</h2>
            <p className="text-xl text-gray-600">Reserve your table for an unforgettable dining experience</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-lemon-green-500" />
                Reservation Details
              </CardTitle>
              <CardDescription>Please fill out all fields to complete your reservation</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Time *
                    </label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="12"
                      required
                      value={formData.guests}
                      onChange={handleInputChange}
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <Textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Any special requests, dietary restrictions, or occasions we should know about..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-lemon-green-500 hover:bg-lemon-green-600 text-white font-semibold py-3"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Confirm Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
