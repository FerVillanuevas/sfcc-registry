"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login form submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="loginEmail" className="text-gray-700 font-normal">
          Email Address
        </Label>
        <Input
          id="loginEmail"
          name="loginEmail"
          type="email"
          placeholder="your@email.com"
          required
          className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="loginPassword" className="text-gray-700 font-normal">
            Password
          </Label>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <Input
            id="loginPassword"
            name="loginPassword"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            required
            className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>
      </div>

      <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-6">
        Sign In
      </Button>
    </form>
  )
}
