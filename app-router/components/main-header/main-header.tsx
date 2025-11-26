import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'
import Link from 'next/link'

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-8 px-4 md:px-[10%]">
        <div className="flex items-center gap-8">
          <Image
            className="w-20 h-20 object-contain filter drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
            src={logoImg}
            alt="A plate with food on it"
            priority
          />
          <Link
            href={'/'}
            className="text-[#ddd6cb] font-bold  font-[Montserrat] text-[1.5rem]"
          >
            FOOD . WIKI
          </Link>
        </div>

        <div>
          <NavLink href={'/meals'}>Bowse Meals</NavLink>
          <NavLink href={'/community'}>Foodies Community</NavLink>
        </div>
      </header>
    </>
  )
}
