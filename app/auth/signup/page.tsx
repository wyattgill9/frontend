"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6">
              <svg viewBox="0 0 24 24" fill="#8B5CF6">
                <path d="M21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0Z" />
              </svg>
            </div>
            <span className="text-xl font-medium">mediasured</span>
          </div>
        </div>

        <div className="grid min-h-[calc(100vh-120px)] grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <div className="w-[400px] space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-medium">Get started</h1>
                <p className="text-sm text-gray-400">Create a new account</p>
              </div>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 border-gray-800 bg-[#181818] text-white hover:bg-[#222222] hover:text-white"
              >
                <Github className="h-5 w-5" />
                Continue with GitHub
              </Button>

              <div className="flex items-center my-4">
                <Separator className="flex-1 bg-gray-800" />
                <span className="px-4 text-sm text-gray-400">or</span>
                <Separator className="flex-1 bg-gray-800" />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="border-gray-800 bg-[#181818] text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="border-gray-800 bg-[#181818] text-white placeholder:text-gray-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <Button className="w-full bg-[#8B5CF6] text-white hover:bg-[#7C3AED]">Sign Up</Button>
              </div>

              <div className="text-center text-sm text-gray-400">
                Have an account?{" "}
                <Link href="/auth/login" className="text-white hover:text-[#8B5CF6]">
                  Sign In Now
                </Link>
              </div>

              <div className="text-center text-xs text-gray-600">
                By continuing, you agree to Mediasured&apos;s{" "}
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
                , and to receive periodic emails with updates.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-8">
            <div className="space-y-4">
              <div className="text-3xl font-light">
                &ldquo;Mediasured is amazing - literally saves our startup so much time. The AI content moderation is a lifesaver!&rdquo;
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="text-gray-400">@drewclemcr8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

