import Link from 'next/link'

import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news'
import NewsList from '@/components/NewsList'
import { Suspense } from 'react'

async function ArchiveHeader({ year, month }) {
  let links = await getAvailableNewsYears()

  if (year && !month) {
    links = getAvailableNewsMonths(year)
  }

  if (year && month) {
    links = []
  }

  const availableNewsYear = await getAvailableNewsYears()

  if (
    (year && !availableNewsYear.includes(year)) ||
    (month && (!year || !getAvailableNewsMonths(year).includes(month)))
  ) {
    throw new Error('Invaild filter.')
  }

  return (
    <header id="archive-header">
      <nav>
        <ul className="news-list">
          {links.map(link => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

async function FilterdNews({ year, month }) {
  let news
  let newsContent = <p>No news found for the selected period.</p>

  if (year && !month) {
    news = await getNewsForYear(year)
  }

  if (year && month) {
    news = await getNewsForYearAndMonth(year, month)
  }

  if (news && news.length > 0) {
    newsContent = (
      <ul className="news-list">
        <NewsList news={news} />
      </ul>
    )
  }

  return newsContent
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  return (
    <>
      <Suspense fallback={<p>filter loading...</p>}>
        <ArchiveHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>News loading...</p>}>
        <FilterdNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  )
}
