'use client'

import { useFormStatus } from 'react-dom'

export default function MealShareFormSubmit() {
  // useFormStatus는 form 안에있는 컴포넌트 에서만 사용 가능
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="rounded-md bg-linear-to-r from-[#f9572a] to-[#ff9b05] px-8 py-3 text-white text-lg font-semibold shadow-md hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed transition-all"
      disabled={pending}
    >
      {pending ? 'Loading' : 'Share Meal'}
    </button>
  )
}
