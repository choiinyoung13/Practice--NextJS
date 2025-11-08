import MealsGrid from '@/components/meals/meals-grid'
import LoadingDots from '@/components/ui/loading-dot'
import { getMeals } from '@/lib/meal'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
}

async function Meals() {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <header className="flex flex-col mx-auto my-12 mb-20 w-[90%] max-w-300 text-[#ddd6cb] text-2xl">
        <h1 className="text-[3rem] font-bold font-[Montserrat]">
          Delicioust meals, created
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="mt-6">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="m-0">
          <Link
            href="/meals/share"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<LoadingDots />}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
