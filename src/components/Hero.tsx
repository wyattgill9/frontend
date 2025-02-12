import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
              Secure Your Social Media
              <br />
              <span className="bg-gradient-to-r from-[#7851A9] via-purple-500 to-purple-400 text-transparent bg-clip-text">
                With Confidence
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Mediasured is an open source analytics and insurance platform for content creators.
              Start your project with social media analytics, insurance coverage, instant insights, and real-time monitoring.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/signup"
                className="rounded-lg bg-[#7851A9] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7851A9]"
              >
                Join Mediasured
              </Link>
              
            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="mt-16">
              <div className="flex justify-center gap-8 md:gap-16 grayscale opacity-40">
                <Image src="/company" alt="company" width={120} height={40} className="h-8 w-auto" />
                <Image src="/company" alt="company" width={120} height={40} className="h-8 w-auto" />
                <Image src="/company" alt="company" width={120} height={40} className="h-8 w-auto" />
                <Image src="/company" alt="company" width={120} height={40} className="h-8 w-auto" />
                <Image src="/company" alt="company" width={120} height={40} className="h-8 w-auto" />
              </div>
              <p className="mt-8 text-center text-sm text-gray-500">
                Trusted by fast-growing companies worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 