'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const socialPlatforms = [
  {
    name: 'Instagram',
    logo: '/social/instagram.svg',
    className: 'hover:text-[#E4405F]'
  },
  {
    name: 'Twitter',
    logo: '/social/twitter.svg',
    className: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'TikTok',
    logo: '/social/tiktok.svg',
    className: 'hover:text-white'
  },
  {
    name: 'YouTube',
    logo: '/social/youtube.svg',
    className: 'hover:text-[#FF0000]'
  },
  {
    name: 'LinkedIn',
    logo: '/social/linkedin.svg',
    className: 'hover:text-[#0A66C2]'
  },
  {
    name: 'Facebook',
    logo: '/social/facebook.svg',
    className: 'hover:text-[#1877F2]'
  },
  {
    name: 'Snapchat',
    logo: '/social/snapchat.svg',
    className: 'hover:text-[#FFFC00]'
  },
  {
    name: 'Pinterest',
    logo: '/social/pinterest.svg',
    className: 'hover:text-[#E60023]'
  }
]

export default function SocialPlatforms() {
  return (
    <div className="py-24 sm:py-32 overflow-hidden bg-black/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Protect your presence on
            <br />
            <span className="bg-gradient-to-r from-[#7851A9] via-purple-500 to-purple-400 text-transparent bg-clip-text">
              every platform
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Secure and monitor your social media presence across all major platforms with our comprehensive protection suite
          </motion.p>
        </div>

        <motion.div 
          className="relative mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Enhanced gradient effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1000px] h-[600px] bg-[#7851A9]/10 rounded-full blur-[100px] opacity-70" />
          </div>

          <div className="relative">
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-16 gap-x-12 sm:gap-x-16 max-w-lg sm:max-w-4xl place-items-center">
              {socialPlatforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className="flex flex-col items-center gap-4 group cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div 
                    className={`relative w-20 h-20 grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 ${platform.className}`}
                  >
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-white">
                    {platform.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 