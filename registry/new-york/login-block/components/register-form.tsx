"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { type RegisterFormValues, registerSchema } from "@/registry/new-york/login-block/lib/auth-schema"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      csrf_token: "LxdKyzT9r7fc_DQrt0gvdkgrziY9pjQUYzM0ORSF",
      dwfrm_profile_customer_firstname: "",
      dwfrm_profile_customer_lastname: "",
      dwfrm_profile_customer_phone: "",
      dwfrm_profile_customer_email: "",
      dwfrm_profile_customer_emailconfirm: "",
      dwfrm_profile_login_password: "",
      dwfrm_profile_login_passwordconfirm: "",
      dwfrm_profile_customer_addtoemaillist: false,
    },
  })

  const onSubmit = async (data: RegisterFormValues) => {
    // Simulate API call
    console.log("Registration form submitted", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Handle registration logic here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <input type="hidden" name="csrf_token" value={form.getValues("csrf_token")} />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="dwfrm_profile_customer_firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="First Name"
                    className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dwfrm_profile_customer_lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Last Name"
                    className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="dwfrm_profile_customer_phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  placeholder="Phone Number"
                  className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dwfrm_profile_customer_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="your@email.com"
                  className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dwfrm_profile_customer_emailconfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="your@email.com"
                  className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dwfrm_profile_login_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
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
              </FormControl>
              <FormDescription>
                Must contain at least 8 characters with uppercase, lowercase, number, and special character.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dwfrm_profile_login_passwordconfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dwfrm_profile_customer_addtoemaillist"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 pt-1">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="text-gray-800 border-gray-300 data-[state=checked]:bg-gray-800"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal text-gray-600">
                  Subscribe to our newsletter for exclusive offers
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-6"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </Form>
  )
}
