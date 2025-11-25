import NewsList from '@/components/NewsList'
import { getLatestNews } from '@/lib/news'

export default function LatestPage() {
  const news = getLatestNews()
  return (
    <>
      <h1>Latest Page</h1>
      <ul className="news-list">
        <NewsList news={news} />
      </ul>
    </>
  )
}
