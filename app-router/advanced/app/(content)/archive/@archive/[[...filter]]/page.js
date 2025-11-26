import Link from 'next/link'

import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news'
import NewsList from '@/components/NewsList'

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news
  let links = await getAvailableNewsYears()

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear)
    links = getAvailableNewsMonths(selectedYear)
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = (
      <ul className="news-list">
        <NewsList news={news} />
      </ul>
    )
  }

  const availableNewsYear = await getAvailableNewsYears()

  if (
    (selectedYear && !availableNewsYear.includes(selectedYear)) ||
    (selectedMonth &&
      (!selectedYear ||
        !getAvailableNewsMonths(selectedYear).includes(selectedMonth)))
  ) {
    throw new Error('Invaild filter.')
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul className="news-list">
            {links.map(link => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
