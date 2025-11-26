'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children }) {
  const path = usePathname()

  const isActive = href === '/' ? path === '/' : path.startsWith(href)

  return (
    <li>
      <Link href={href} className={isActive ? 'active' : undefined}>
        {children}
      </Link>
    </li>
  )
}
