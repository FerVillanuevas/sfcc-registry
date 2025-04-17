"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TrackOrderForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle order tracking logic here
    console.log("Order tracking form submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="trackOrderNumber" className="text-gray-700 font-normal">
          Order Number
        </Label>
        <Input
          id="trackOrderNumber"
          name="trackOrderNumber"
          placeholder="Enter your order number"
          required
          className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="trackOrderEmail" className="text-gray-700 font-normal">
          Email Address
        </Label>
        <Input
          id="trackOrderEmail"
          name="trackOrderEmail"
          type="email"
          placeholder="Email used for order"
          required
          className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="trackOrderPostal" className="text-gray-700 font-normal">
          Postal Code
        </Label>
        <Input
          id="trackOrderPostal"
          name="trackOrderPostal"
          placeholder="Shipping postal code"
          required
          className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
        />
      </div>

      <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-6">
        Track Order
      </Button>
    </form>
  )
}
