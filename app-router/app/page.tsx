import ImageSlider from '@/components/images/image-slider'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-300">
        <div className="w-160 h-100">
          <ImageSlider />
        </div>
        <div className="text-[#ddd6cb] text-[1.5rem]">
          <div>
            <h1 className="text-[2rem] font-bold font-[Montserrat] tracking-[0.15rem] bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent uppercase">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="text-[1.5rem] flex gap-4">
            <Link
              href="/community"
              className="inline-block mt-4 pr-4 py-2 rounded-md font-normal text-[#ff9b05] first:hover:text-[#f9b241] first:active:text-[#f9b241] "
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-4 px-4 py-2 rounded-md font-bold text-white bg-linear-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col gap-10 text-[#ddd6cb] max-w-200 w-[90%] my-8 mx-auto text-center">
          <h2 className="text-[2.5rem] font-bold">How it works</h2>
          <p className="text-[1.5rem]">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-[1.5rem]">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col gap-10 text-[#ddd6cb]  max-w-200 w-[90%] my-8 mx-auto text-center">
          <h2 className="text-[2.5rem] font-bold">Why NextLevel Food?</h2>
          <p className="text-[1.5rem]">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-[1.5rem]">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}
