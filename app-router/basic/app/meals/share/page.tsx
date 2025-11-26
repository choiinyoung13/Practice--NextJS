import MealsShareForm from '@/components/meals/meal-share-form'

export default async function ShareMealPage() {
  return (
    <>
      <header className="gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-300 text-[#ddd6cb] text-[1.5rem]">
        <h1 className="text-[3rem] font-bold font-[Montserrat]">
          Share your{' '}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="mt-2">Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-300 my-12 mx-auto text-[#ffffff]">
        <MealsShareForm />
      </main>
    </>
  )
}
