import Link from 'next/link'
import Image from 'next/image'
import { MealType } from '../../type/meal'

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealType) {
  return (
    <article className="flex flex-col justify-between h-full rounded-md shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-linear-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-60">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="eager"
          />
        </div>
        <div className="px-4 pt-2">
          <h2 className="m-0 text-xl font-bold font-montserrat">{title}</h2>
          <p className="m-0 text-sm italic text-[#cfa69b]">by {creator}</p>
        </div>
      </header>

      <div className="flex flex-col justify-between h-full">
        <p className="px-4 pt-4">{summary}</p>
        <div className="px-4 py-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 px-4 py-2 rounded-md bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] transition-all duration-300 ease-in-out"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
