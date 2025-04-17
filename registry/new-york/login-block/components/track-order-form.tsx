"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { type TrackOrderFormValues, trackOrderSchema } from "@/registry/new-york/login-block/lib/auth-schema"

export function TrackOrderForm() {
  const form = useForm<TrackOrderFormValues>({
    resolver: zodResolver(trackOrderSchema),
    defaultValues: {
      trackOrderNumber: "",
      trackOrderEmail: "",
      trackOrderPostal: "",
    },
  })

  const onSubmit = async (data: TrackOrderFormValues) => {
    // Simulate API call
    console.log("Order tracking form submitted", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Handle order tracking logic here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="trackOrderNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your order number"
                  className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="trackOrderEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Email used for order"
                  className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="trackOrderPostal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Postal Code</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Shipping postal code"
                  className="border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-6"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Tracking..." : "Track Order"}
        </Button>
      </form>
    </Form>
  )
}
