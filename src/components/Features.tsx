'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { 
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
  ClockIcon,
  UserGroupIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Analytics Dashboard',
    description: 'Every project includes comprehensive social media analytics, tracking engagement rates, follower trends, and audience growth across multiple platforms.',
    icon: ChartBarIcon,
    demo: (
      <div className="relative h-full w-full bg-[#1C1C1C] rounded-lg p-4 overflow-hidden">
        {/* Add a graph or chart visualization here */}
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 bg-[#2E2E2E] rounded-md animate-pulse"></div>
          <div className="h-24 bg-[#2E2E2E] rounded-md animate-pulse"></div>
          <div className="h-24 bg-[#2E2E2E] rounded-md animate-pulse"></div>
        </div>
      </div>
    )
  },
  {
    name: 'Influencer Insurance',
    description: 'Add custom insurance coverage to protect your online presence, with risk assessment based on engagement metrics and audience quality.',
    icon: ShieldCheckIcon,
    demo: (
      <div className="relative h-full w-full bg-[#1C1C1C] rounded-lg p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#7851A9]/20 rounded-full flex items-center justify-center">
              <ShieldCheckIcon className="w-5 h-5 text-[#7851A9]" />
            </div>
            <div className="h-6 w-32 bg-[#2E2E2E] rounded-md"></div>
          </div>
          <div className="h-4 w-full bg-[#2E2E2E] rounded-md"></div>
          <div className="h-4 w-3/4 bg-[#2E2E2E] rounded-md"></div>
        </div>
      </div>
    )
  },
  {
    name: 'Real-time Monitoring',
    description: 'Built-in real-time monitoring for instant alerts on engagement drops, unusual activity, or potential risks to your social media presence.',
    icon: BoltIcon,
    demo: (
      <div className="relative h-full w-full bg-[#1C1C1C] rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#7851A9]"></div>
            <div className="h-4 w-40 bg-[#2E2E2E] rounded-md"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#7851A9]"></div>
            <div className="h-4 w-32 bg-[#2E2E2E] rounded-md"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Automated Claims',
    description: 'Process insurance claims automatically based on real-time data and predefined risk parameters.',
    icon: ClockIcon,
    demo: (
      <div className="relative h-full w-full bg-[#1C1C1C] rounded-lg p-4">
        <div className="space-y-3">
          <div className="h-8 w-3/4 bg-[#2E2E2E] rounded-md"></div>
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-[#7851A9]/20 rounded-md flex items-center justify-center">
              <span className="text-xs text-[#7851A9]">Approved</span>
            </div>
            <div className="h-6 w-24 bg-[#2E2E2E] rounded-md"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Audience Insights',
    description: 'Deep analytics into your audience demographics, behavior patterns, and engagement quality.',
    icon: UserGroupIcon,
    demo: (
      <div className="relative h-full w-full bg-[#1C1C1C] rounded-lg p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="h-20 bg-[#2E2E2E] rounded-md"></div>
          <div className="h-20 bg-[#2E2E2E] rounded-md"></div>
        </div>
      </div>
    )
  },
  {
    name: 'Predictive Analytics',
    description: 'AI-powered predictions for growth trends, risk assessment, and content performance.',
    icon: PresentationChartLineIcon,
    demo: (
      <div className="relative h-full w-full bg-[#1C1C1C] rounded-lg p-4">
        <div className="h-32 bg-[#2E2E2E] rounded-md flex items-center justify-center">
          <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-[#7851A9] to-transparent"></div>
        </div>
      </div>
    )
  },
]

const FeatureDemo = ({ index, isActive }: { index: number; isActive: boolean }) => {
  const overlays = {
    0: ( // Analytics Dashboard - Simple bar chart animation
      <motion.div className="absolute inset-0 p-4">
        <div className="grid grid-cols-4 h-full gap-2 items-end">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-[#7851A9]/20 rounded-t-md w-full"
              initial={{ height: "20%" }}
              animate={{ 
                height: isActive ? `${30 + Math.random() * 50}%` : "20%",
                backgroundColor: isActive ? "rgb(120, 81, 169, 0.3)" : "rgb(120, 81, 169, 0.2)"
              }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    ),
    1: ( // Insurance - Simple shield pulse
      <motion.div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 bg-[#7851A9]/20 rounded-full flex items-center justify-center"
          animate={{ 
            boxShadow: isActive ? [
              "0 0 0 0 rgba(120, 81, 169, 0.4)",
              "0 0 0 20px rgba(120, 81, 169, 0)"
            ] : "none"
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ShieldCheckIcon className="w-8 h-8 text-[#7851A9]" />
        </motion.div>
      </motion.div>
    ),
    2: ( // Real-time Monitoring - Activity indicators
      <motion.div className="absolute inset-0 p-4">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className={`h-2 w-2 rounded-full ${
                i === 0 ? 'bg-[#7851A9]' : 
                i === 1 ? 'bg-[#7851A9]' : 
                'bg-red-500'
              }`} />
              <div className="h-2 bg-gray-700 rounded-full flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
    3: ( // Automated Claims - Simple progress indicator
      <motion.div className="absolute inset-0 p-4 flex flex-col justify-center">
        <motion.div 
          className="h-2 bg-gray-700 rounded-full overflow-hidden"
          initial={{ width: "100%" }}
        >
          <motion.div
            className="h-full bg-[#7851A9]"
            initial={{ width: "0%" }}
            animate={{ width: isActive ? "100%" : "0%" }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.div
          className="mt-4 text-sm text-[#7851A9] text-center"
          animate={{ opacity: isActive ? [0.5, 1] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Processing...
        </motion.div>
      </motion.div>
    ),
    4: ( // Audience Insights - Simple demographic charts
      <motion.div className="absolute inset-0 p-4">
        <div className="grid grid-cols-2 gap-4 h-full">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-gray-700 rounded-lg overflow-hidden"
              initial={{ height: "60%" }}
              animate={{ height: isActive ? `${70 + Math.random() * 20}%` : "60%" }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <motion.div
                className="bg-[#7851A9]/20 h-full w-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isActive ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
    5: ( // Predictive Analytics - Simple trend line
      <motion.div className="absolute inset-0 p-4 flex items-center">
        <motion.div 
          className="w-full h-px bg-[#7851A9]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute right-0 top-1/2 w-3 h-3 -mt-1.5 -mr-1.5 bg-[#7851A9] rounded-full"
            animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="relative h-full w-full bg-black/20 rounded-xl overflow-hidden">
      {overlays[index as keyof typeof overlays]}
    </div>
  )
}

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-[#7851A9]">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Analytics & Insurance in one platform
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Protect and grow your social media presence with comprehensive analytics and innovative insurance coverage.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1000px] h-[600px] bg-[#7851A9]/10 rounded-full blur-[100px] opacity-70" />
          </div>

          <dl className="relative grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="flex flex-col h-full rounded-2xl p-6 transition-all duration-300 bg-[rgb(18,18,18)] border border-[#2E2E2E]"
                  onMouseEnter={() => {
                    setActiveFeature(index)
                    setHoveredFeature(index)
                  }}
                  onMouseLeave={() => {
                    setActiveFeature(null)
                    setHoveredFeature(null)
                  }}
                  animate={{
                    y: hoveredFeature === index ? -4 : 0,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-none"
                    >
                      <feature.icon className="h-5 w-5 text-[#7851A9]" aria-hidden="true" />
                    </motion.div>
                    <motion.span
                      animate={{
                        color: hoveredFeature === index ? "#fff" : "#f1f5f9"
                      }}
                    >
                      {feature.name}
                    </motion.span>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col">
                    <motion.p 
                      className="flex-auto text-base leading-7 text-gray-400"
                      animate={{
                        opacity: hoveredFeature === index ? 1 : 0.8
                      }}
                    >
                      {feature.description}
                    </motion.p>
                    <div className="mt-6 h-40">
                      <FeatureDemo index={index} isActive={activeFeature === index} />
                    </div>
                  </dd>
                </motion.div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 