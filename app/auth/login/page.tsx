"use client"

import Image from "next/image"
import Link from "next/link"
import { Github } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
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
                <h1 className="text-3xl font-medium">Welcome back</h1>
                <p className="text-sm text-gray-400">Sign in to your account</p>
              </div>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 border-gray-800 bg-[#181818] text-white hover:bg-[#222222] hover:text-white"
              >
                <Github className="h-5 w-5" />
                Continue with GitHub
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 border-gray-800 bg-[#181818] text-white hover:bg-[#222222] hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
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
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-400">Password</label>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white">
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    type="password"
                    className="border-gray-800 bg-[#181818] text-white placeholder:text-gray-600"
                  />
                </div>
                <Button className="w-full bg-[#8B5CF6] text-white hover:bg-[#7C3AED]">Sign In</Button>
              </div>

              <div className="text-center text-sm text-gray-400">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-white hover:text-[#8B5CF6]">
                  Sign Up Now
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
              <div className="text-3xl font-light">&ldquo;Mediasured is amazing - literally saves our startup so much time. The AI content moderation is a lifesaver!&rdquo;</div>
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
