import Image from 'next/image'
import { getMeal } from '@/lib/meal'
import { notFound } from 'next/navigation'

type MealDetailProps = {
  params: { mealSlug: string }
}

export async function generateMetadata({ params }: MealDetailProps) {
  const { mealSlug } = await params
  const meal = await getMeal(mealSlug)

  if (!meal) notFound()

  return { title: meal.title, description: meal.summary }
}

export default async function MealDetail({ params }: MealDetailProps) {
  const { mealSlug } = await params
  const meal = await getMeal(mealSlug)

  if (!meal) {
    // 제일 가까운 not-found.js를 렌더링
    notFound()
  }

  return (
    <>
      <header className="flex flex-col md:flex-row gap-12 p-8 mx-auto max-w-7xl">
        <div className="relative w-120 h-80 animate-[fade-slide-in-from-left_1s_ease-out_forwards]">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.5)]"
          />
        </div>

        <div className="text-[#ddd6cb] max-w-160 p-2 animate-[fade-slide-in-from-right_1s_ease-out_forwards]">
          <h1 className="m-0 text-[3.5rem] uppercase font-[Montserrat] text-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
            {meal.title}
          </h1>
          <p className="text-[1.5rem] italic text-[#cfa69b]">
            by{' '}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:text-shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-[1.5rem]">{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className="text-[1.25rem] leading-normal bg-[#6e6464] text-[#13120f] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.5)] p-8 max-w-240 mx-auto my-8 animate-[fade-slide-in-from-bottom_1s_ease-out_forwards]"
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, '<br/>'),
          }}
        />
      </main>
    </>
  )
}
