'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface navLinkProps {
  href: string
  children: ReactNode
}

export default function NavLink({ href, children }: navLinkProps) {
  const path = usePathname()
  const isActive = path.startsWith(href)

  return (
    <Link
      className={`font-bold py-2 px-4 transition-colors duration-300 hover:text-[#ff8a05] ${
        isActive ? 'text-[#f9b331]' : 'text-[#ddd6cb]'
      }`}
      href={href}
    >
      {children}
    </Link>
  )
}
