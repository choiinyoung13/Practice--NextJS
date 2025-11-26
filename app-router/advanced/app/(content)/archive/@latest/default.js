import NewsList from '@/components/NewsList'
import { getLatestNews } from '@/lib/news'

export default async function LatestPage() {
  const news = await getLatestNews()
  return (
    <>
      <h1>Latest Page</h1>
      <ul className="news-list">
        <NewsList news={news} />
      </ul>
    </>
  )
}
