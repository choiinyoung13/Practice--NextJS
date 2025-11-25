import Link from 'next/link'

export default function MainHeader() {
  return (
    <div id="main-header">
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/news">NEWS</Link>
        </li>
      </ul>
    </div>
  )
}
