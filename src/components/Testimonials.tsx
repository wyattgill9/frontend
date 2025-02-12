'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    author: '@jperelli',
    content: "This weekend I made a personal record 🔥 on the less time spent creating an application with social login / permissions, database, cdn, infinite scaling, git push to deploy and for free. Thanks to @mediasured and @vercel!"
  },
  {
    author: '@PaoloRicciuti',
    content: "Using @mediasured I'm really pleased with the content moderation. The AI detection is incredibly accurate and the automated claims system is a game changer. The whole experience feels very robust and secure."
  },
  {
    author: '@justinjunodev',
    content: "Y'all @mediasured + @nextjs is amazing! 🙌 Barely an hour into setting up content moderation and already have most of the functionality in place. The AI detection is spot on! 😊😊😊"
  },
  {
    author: '@BraydonCoyer',
    content: "And thanks to @mediasured, I was able to go from manual content moderation to fully automated in a matter of hours. The risk assessment tools are absolutely unreal!"
  },
  {
    author: '@saxxone',
    content: "@mediasured is lit. It took me less than 10 minutes to setup, the UX is just amazing. The automated content scanning saved us so much time."
  },
  {
    author: '@KennethCassel',
    content: "Badass! Mediasured is amazing - literally saves our startup so much time. The AI content moderation is a lifesaver!"
  }
]

const Tweet = ({ author, content }: { author: string; content: string }) => (
  <div className="flex-shrink-0 w-[400px] bg-[#121212] rounded-lg border border-[#1C1C1C] p-4">
    <div className="flex items-center gap-2 mb-2">
      <div className="text-[13px] text-[#EDEDED]">{author}</div>
      <svg className="w-[18px] h-[18px] text-[#1DA1F2] opacity-80" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    </div>
    <p className="text-[13px] text-[#7E7E7E] leading-[1.4]">{content}</p>
  </div>
)

export default function Testimonials() {
  return (
    <div className="py-24 sm:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[40px] font-medium text-white mb-3">
            Join the community
          </h2>
          <p className="text-[#7E7E7E] text-lg mb-8">
            Discover what our community has to say about their Mediasured experience.
          </p>

          
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="relative overflow-hidden">
            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="flex tweets-scroll">
                  <div className="flex gap-6 animate-scroll">
                    {[...testimonials.slice(0, 3)].map((tweet, idx) => (
                      <Tweet key={`row1-1-${idx}`} {...tweet} />
                    ))}
                  </div>
                  <div className="flex gap-6 animate-scroll">
                    {[...testimonials.slice(0, 3)].map((tweet, idx) => (
                      <Tweet key={`row1-2-${idx}`} {...tweet} />
                    ))}
                  </div>
                  <div className="flex gap-6 animate-scroll">
                    {[...testimonials.slice(0, 3)].map((tweet, idx) => (
                      <Tweet key={`row1-3-${idx}`} {...tweet} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex tweets-scroll">
                  <div className="flex gap-6 animate-scroll-reverse">
                    {[...testimonials.slice(3, 6)].map((tweet, idx) => (
                      <Tweet key={`row2-1-${idx}`} {...tweet} />
                    ))}
                  </div>
                  <div className="flex gap-6 animate-scroll-reverse">
                    {[...testimonials.slice(3, 6)].map((tweet, idx) => (
                      <Tweet key={`row2-2-${idx}`} {...tweet} />
                    ))}
                  </div>
                  <div className="flex gap-6 animate-scroll-reverse">
                    {[...testimonials.slice(3, 6)].map((tweet, idx) => (
                      <Tweet key={`row2-3-${idx}`} {...tweet} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 