'use client'

import { motion } from 'framer-motion'
import { CheckIcon, ChartBarIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const features = [
  'Full Analytics',
  'Materialized Reports',
  'Risk Assessment',
  'Automated Claims',
  'Easy as a spreadsheet'
]

const metrics = [
  { label: 'Followers', value: '12.5K', trend: '+12%', positive: true },
  { label: 'Engagement', value: '3.2K', trend: '+8%', positive: true },
  { label: 'Risk Score', value: '92', trend: '-2%', positive: false }
]

const chartData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))

const TabContent = ({ activeTab }: { activeTab: string }) => {
  switch (activeTab) {
    case 'analytics':
      return (
        <div className="space-y-6">
          {/* Analytics View */}
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/20 rounded-lg p-4"
              >
                <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                <div className="flex items-end gap-2">
                  <div className="text-2xl font-semibold text-white">{metric.value}</div>
                  <div className={`text-sm ${metric.positive ? 'text-[#7851A9]' : 'text-red-500'}`}>
                    {metric.trend}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-black/20 rounded-lg p-4 h-48 flex items-end gap-2">
            {chartData.map((value, index) => (
              <motion.div
                key={index}
                className="bg-[#7851A9]/50 hover:bg-[#7851A9] transition-colors rounded-t w-full"
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      )

    case 'risk':
      return (
        <div className="space-y-6">
          {/* Risk Assessment View */}
          <div className="bg-black/20 rounded-lg p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-2xl font-semibold text-white mb-2">Risk Score</div>
                <div className="text-gray-400">Account health assessment</div>
              </div>
              <div className="text-5xl font-bold text-[#7851A9]">92</div>
            </div>
            <div className="space-y-4">
              {['Content Safety', 'Account Security', 'Engagement Health'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="text-gray-400">{item}</div>
                  <div className="flex items-center gap-2">
                    <div className="w-48 h-2 bg-black/40 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#7851A9]"
                        initial={{ width: 0 }}
                        animate={{ width: `${85 + Math.random() * 15}%` }}
                        transition={{ delay: index * 0.2, duration: 1 }}
                      />
                    </div>
                    <div className="text-white w-8 text-right">98%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )

    case 'activity':
      return (
        <div className="space-y-4">
          {/* Live Activity View */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/20"
            >
              <div className={`w-2 h-2 rounded-full ${
                index % 3 === 0 ? 'bg-[#7851A9]' : 
                index % 3 === 1 ? 'bg-[#7851A9]' : 
                'bg-blue-500'
              }`} />
              <div className="flex-1">
                <div className="text-white">
                  {index % 3 === 0 ? 'New follower milestone reached' :
                   index % 3 === 1 ? 'Engagement spike detected' :
                   'Content performance update'}
                </div>
                <div className="text-sm text-gray-500">
                  {`${2 + index}m ago`}
                </div>
              </div>
              <div className="text-sm text-gray-400">
                {index % 3 === 0 ? '+500 followers' :
                 index % 3 === 1 ? '+128% engagement' :
                 '+45% views'}
              </div>
            </motion.div>
          ))}
        </div>
      )

    default:
      return null
  }
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('analytics')

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-medium text-white mb-4"
          >
            Stay productive and manage{' '}
            <span className="bg-gradient-to-r from-[#7851A9] via-purple-500 to-purple-400 text-transparent bg-clip-text">
              your presence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl text-[#707070]"
          >
            without leaving the dashboard
          </motion.p>
        </div>

        <div className="mt-6 flex justify-center gap-x-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-2 text-sm text-[#707070]"
            >
              <CheckIcon className="w-4 h-4 text-[#7851A9]" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative mt-16 aspect-[4/3] w-full max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 rounded-2xl bg-[#1C1C1C] border border-[#2E2E2E] overflow-hidden">
            <div className="p-6">
              {/* Tab Navigation */}
              <div className="flex items-center gap-4 mb-6">
                {[
                  { id: 'analytics', icon: ChartBarIcon, label: 'Analytics' },
                  { id: 'risk', icon: ShieldCheckIcon, label: 'Risk Assessment' },
                  { id: 'activity', icon: BoltIcon, label: 'Live Activity' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-[#7851A9]/10 text-[#7851A9]' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <TabContent activeTab={activeTab} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 