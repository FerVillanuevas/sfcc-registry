"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration form submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="csrf_token" value="LxdKyzT9r7fc_DQrt0gvdkgrziY9pjQUYzM0ORSF" />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dwfrm_profile_customer_firstname" className="text-gray-700 font-normal">
            First Name
          </Label>
          <Input
            id="dwfrm_profile_customer_firstname"
            name="dwfrm_profile_customer_firstname"
            placeholder="First Name"
            required
            className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dwfrm_profile_customer_lastname" className="text-gray-700 font-normal">
            Last Name
          </Label>
          <Input
            id="dwfrm_profile_customer_lastname"
            name="dwfrm_profile_customer_lastname"
            placeholder="Last Name"
            required
            className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dwfrm_profile_customer_phone" className="text-gray-700 font-normal">
          Phone Number
        </Label>
        <Input
          id="dwfrm_profile_customer_phone"
          name="dwfrm_profile_customer_phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dwfrm_profile_customer_email" className="text-gray-700 font-normal">
          Email
        </Label>
        <Input
          id="dwfrm_profile_customer_email"
          name="dwfrm_profile_customer_email"
          type="email"
          placeholder="your@email.com"
          required
          className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dwfrm_profile_customer_emailconfirm" className="text-gray-700 font-normal">
          Confirm Email
        </Label>
        <Input
          id="dwfrm_profile_customer_emailconfirm"
          name="dwfrm_profile_customer_emailconfirm"
          type="email"
          placeholder="your@email.com"
          required
          className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dwfrm_profile_login_password" className="text-gray-700 font-normal">
          Password
        </Label>
        <div className="relative">
          <Input
            id="dwfrm_profile_login_password"
            name="dwfrm_profile_login_password"
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
        <p className="text-xs text-gray-500">
          Must contain at least 8 characters with uppercase, lowercase, number, and special character.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dwfrm_profile_login_passwordconfirm" className="text-gray-700 font-normal">
          Confirm Password
        </Label>
        <div className="relative">
          <Input
            id="dwfrm_profile_login_passwordconfirm"
            name="dwfrm_profile_login_passwordconfirm"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            required
            className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2 pt-1">
        <Checkbox
          id="dwfrm_profile_customer_addtoemaillist"
          name="dwfrm_profile_customer_addtoemaillist"
          className="text-gray-800 border-gray-300"
        />
        <Label htmlFor="dwfrm_profile_customer_addtoemaillist" className="text-sm font-normal text-gray-600">
          Subscribe to our newsletter for exclusive offers
        </Label>
      </div>

      <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-6">
        Create Account
      </Button>
    </form>
  )
}
