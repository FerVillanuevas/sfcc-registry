import * as z from "zod"

// Login form schema
export const loginSchema = z.object({
  loginEmail: z.string().email({ message: "Please enter a valid email address" }),
  loginPassword: z.string().min(1, { message: "Password is required" }),
})

export type LoginFormValues = z.infer<typeof loginSchema>

// Registration form schema
export const registerSchema = z
  .object({
    csrf_token: z.string(),
    dwfrm_profile_customer_firstname: z.string().min(1, { message: "First name is required" }),
    dwfrm_profile_customer_lastname: z.string().min(1, { message: "Last name is required" }),
    dwfrm_profile_customer_phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
    dwfrm_profile_customer_email: z.string().email({ message: "Please enter a valid email address" }),
    dwfrm_profile_customer_emailconfirm: z.string().email({ message: "Please enter a valid email address" }),
    dwfrm_profile_login_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
    dwfrm_profile_login_passwordconfirm: z.string(),
    dwfrm_profile_customer_addtoemaillist: z.boolean().optional(),
  })
  .refine((data) => data.dwfrm_profile_customer_email === data.dwfrm_profile_customer_emailconfirm, {
    message: "Email addresses do not match",
    path: ["dwfrm_profile_customer_emailconfirm"],
  })
  .refine((data) => data.dwfrm_profile_login_password === data.dwfrm_profile_login_passwordconfirm, {
    message: "Passwords do not match",
    path: ["dwfrm_profile_login_passwordconfirm"],
  })

export type RegisterFormValues = z.infer<typeof registerSchema>

// Order tracking form schema
export const trackOrderSchema = z.object({
  trackOrderNumber: z.string().min(1, { message: "Order number is required" }),
  trackOrderEmail: z.string().email({ message: "Please enter a valid email address" }),
  trackOrderPostal: z.string().min(5, { message: "Please enter a valid postal code" }),
})

export type TrackOrderFormValues = z.infer<typeof trackOrderSchema>
