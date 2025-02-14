'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { 
  BookOpenIcon, 
  PuzzlePieceIcon,
  DocumentCheckIcon,
  LifebuoyIcon,
  CodeBracketIcon,
  UsersIcon,
  CalendarIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'

const productItems = [
  {
    title: 'DEVELOPERS',
    items: [
      {
        title: 'Documentation',
        description: 'Learn how to integrate our platform',
        href: '/docs',
        icon: BookOpenIcon
      },
      {
        title: 'Integrations',
        description: 'Connect with your favorite tools',
        href: '/integrations',
        icon: PuzzlePieceIcon
      },
      {
        title: 'Changelog',
        description: "See what's new in our latest updates",
        href: '/changelog',
        icon: DocumentCheckIcon
      },
      {
        title: 'Support',
        description: 'Get help from our team',
        href: '/support',
        icon: LifebuoyIcon
      },
    ],
  },
]

const developerItems = [
  {
    title: 'RESOURCES',
    items: [
      {
        title: 'Open Source',
        description: 'Explore our open source projects',
        href: '/open-source',
        icon: CodeBracketIcon
      },
      {
        title: 'GitHub Discussions',
        description: 'Join our developer community',
        href: '/discussions',
        icon: UsersIcon
      },
      {
        title: 'Become a Partner',
        description: 'Work with us to grow together',
        href: '/partners',
        icon: UsersIcon
      },
      {
        title: 'Events & Webinars',
        description: 'Learn from our experts',
        href: '/events',
        icon: CalendarIcon
      },
      {
        title: 'Careers (13)',
        description: 'Join our growing team',
        href: '/careers',
        icon: BriefcaseIcon
      },
    ],
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
    }
    // Smooth transition between dropdowns
    if (activeDropdown && activeDropdown !== dropdown) {
      setActiveDropdown(null)
      setTimeout(() => setActiveDropdown(dropdown), 50)
      return
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before closing
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-2xl font-bold text-white">Mediasured</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <div 
            className="relative group"
            onMouseEnter={() => handleMouseEnter('product')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
            >
              Product
              <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {activeDropdown === 'product' && (
              <div
                className="absolute -left-4 top-full pt-2 w-[380px] origin-top-right rounded-xl bg-[#1C1C1C]/95 border border-[#2E2E2E] shadow-xl backdrop-blur-sm ring-1 ring-white/5 overflow-hidden z-50"
                style={{
                  animation: 'dropdownSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {productItems.map((section) => (
                  <div key={section.title} className="p-2">
                    <p className="px-3 py-2 text-xs font-semibold text-gray-400/80 tracking-wider">
                      {section.title}
                    </p>
                    <div className="space-y-0.5">
                      {section.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group flex gap-4 px-3 py-2.5 text-sm text-gray-300 hover:bg-white/[0.07] rounded-lg transition-all duration-200 hover:translate-x-0.5"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-400/80 group-hover:text-purple-500 transition-colors duration-200">
                            <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                          </span>
                          <div>
                            <p className="font-medium text-gray-200 group-hover:text-white transition-colors duration-200">
                              {item.title}
                            </p>
                            <p className="text-[13px] text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => handleMouseEnter('developers')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
            >
              Developers
              <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === 'developers' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {activeDropdown === 'developers' && (
              <div
                className="absolute -left-4 top-full pt-2 w-[380px] origin-top-right rounded-xl bg-[#1C1C1C]/95 border border-[#2E2E2E] shadow-lg backdrop-blur-sm ring-1 ring-white/5 overflow-hidden z-50"
                style={{
                  animation: 'dropdownSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {developerItems.map((section) => (
                  <div key={section.title} className="p-2">
                    <p className="px-3 py-2 text-xs font-semibold text-gray-400/80 tracking-wider">
                      {section.title}
                    </p>
                    <div className="space-y-0.5">
                      {section.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group flex gap-4 px-3 py-2.5 text-sm text-gray-300 hover:bg-white/[0.07] rounded-lg transition-all duration-200 hover:translate-x-0.5"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-400/80 group-hover:text-purple-500 transition-colors duration-200">
                            <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                          </span>
                          <div>
                            <p className="font-medium text-gray-200 group-hover:text-white transition-colors duration-200">
                              {item.title}
                            </p>
                            <p className="text-[13px] text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="text-sm font-semibold leading-6 text-white">
            About
          </Link>
          <Link href="/pricing" className="text-sm font-semibold leading-6 text-white">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
          <Link
            href="/auth/signup"
            className="rounded-md bg-[#7851A9] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
} 
