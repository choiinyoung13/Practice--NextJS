import NewsList from '@/components/NewsList'
import { getAllNews } from '@/lib/news'

export default async function NewsPage() {
  const news = await getAllNews()

  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <NewsList news={news} />
      </ul>
    </>
  )
}
