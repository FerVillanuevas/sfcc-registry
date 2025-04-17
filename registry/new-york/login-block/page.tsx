"use client";

import { Banner } from "@/registry/new-york/login-block/components/banner";
import { LoginForm } from "@/registry/new-york/login-block/components/login-form";
import { RegisterForm } from "@/registry/new-york/login-block/components/register-form";
import { TrackOrderForm } from "@/registry/new-york/login-block/components/track-order-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/registry/new-york/login-block/hooks/use-media-query";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="min-h-screen">
      <Banner />

      <div className="flex flex-col items-center justify-center py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Login and Register side by side */}
          <div
            className={`grid ${
              isDesktop ? "grid-cols-2" : "grid-cols-1"
            } gap-8`}
          >
            {/* Login Card */}
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-light text-gray-800">
                  Sign In
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Access your account and manage your orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>

            {/* Register Card */}
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-light text-gray-800">
                  Create Account
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Join us for a personalized shopping experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm />
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8 bg-gray-200" />

          {/* Order Tracking at the bottom */}
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-light text-gray-800">
                  Track Your Order
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Check the status of your recent purchase
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TrackOrderForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
