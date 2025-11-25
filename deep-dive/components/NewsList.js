import Link from 'next/link'

export default function NewsList({ news }) {
  return (
    <>
      {news.map((news, i) => (
        <li key={i}>
          <Link href={`/news/${news.slug}`}>
            <img src={`/images/news/${news.image}`} alt={news.title} />
            {news.title}
          </Link>
        </li>
      ))}
    </>
  )
}
