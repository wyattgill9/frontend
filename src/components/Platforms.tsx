'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const socialPlatforms = [
  {
    name: 'Instagram',
    logo: '/platforms/instagram.svg',
    className: 'hover:bg-gradient-to-br hover:from-[#FF3CAC] hover:via-[#784BA0] hover:to-[#2B86C5] hover:border-[#FF3CAC]/50'
  },
  {
    name: 'Twitter',
    logo: '/platforms/twitter.svg',
    className: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]/50'
  },
  {
    name: 'TikTok',
    logo: '/platforms/tiktok.svg',
    className: 'hover:bg-gradient-to-br hover:from-[#00f2ea] hover:to-[#ff0050] hover:border-[#00f2ea]/50'
  },
  {
    name: 'YouTube',
    logo: '/platforms/youtube.svg',
    className: 'hover:bg-[#FF0000] hover:border-[#FF0000]/50'
  },
  {
    name: 'Twitch',
    logo: '/platforms/twitch.svg',
    className: 'hover:bg-[#9146FF] hover:border-[#9146FF]/50'
  },
  {
    name: 'LinkedIn',
    logo: '/platforms/linkedin.svg',
    className: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]/50'
  },
  {
    name: 'Facebook',
    logo: '/platforms/facebook.svg',
    className: 'hover:bg-[#1877F2] hover:border-[#1877F2]/50'
  },
  {
    name: 'Snapchat',
    logo: '/platforms/snapchat.svg',
    className: 'hover:bg-[#FFFC00] hover:border-[#FFFC00]/50'
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

        <motion.div className="relative mt-24">
          {/* Background gradient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1000px] h-[600px] bg-[#7851A9]/10 rounded-full blur-[100px] opacity-70" />
          </div>

          <div className="relative">
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-16 gap-x-12 sm:gap-x-20 max-w-lg sm:max-w-4xl place-items-center">
              {socialPlatforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className="flex flex-col items-center gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="relative group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Platform-specific glow */}
                    <div className={`absolute -inset-3 rounded-xl blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-20 ${platform.className}`} />
                    
                    {/* Icon container */}
                    <div 
                      className={`relative flex items-center justify-center w-20 h-20 
                        bg-[#1C1C1C] rounded-2xl border-2 border-[#2E2E2E]
                        transition-all duration-300 ease-out
                        group-hover:scale-110 group-hover:rotate-[4deg]
                        group-hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]
                        overflow-hidden backdrop-blur-sm
                        before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300
                        group-hover:before:opacity-100 before:pointer-events-none
                        ${platform.className}`}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 
                        group-hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                      
                      {/* Icon */}
                      <div className="relative w-11 h-11 transition-all duration-300 
                        group-hover:scale-110 group-hover:brightness-[1.15] group-hover:rotate-[-4deg]">
                        <Image
                          src={platform.logo}
                          alt={platform.name}
                          fill
                          className="object-contain transition-all duration-300 drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  <span className="text-sm font-medium text-gray-400 transition-all duration-300 group-hover:text-white">
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