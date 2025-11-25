import { getAvailableNewsYears } from '@/lib/news'
import Link from 'next/link'

export default function ArchievePage() {
  const links = getAvailableNewsYears()

  return (
    <div id="archive-header">
      <h1>Archieve Page</h1>
      <ul>
        {links.map(link => (
          <li key={link}>
            <Link href={`/archive/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
