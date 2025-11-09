import LoadingDots from '@/components/ui/loading-dot'
import { getMeal } from '@/lib/meal'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default function Loading() {
  return (
    <section className="mt-50">
      <LoadingDots />
    </section>
  )
}
