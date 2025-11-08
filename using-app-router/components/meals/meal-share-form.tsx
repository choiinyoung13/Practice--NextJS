'use client'

import { useActionState, useEffect } from 'react'
import ImagePicker from './image-picker'
import MealShareFormSubmit from './meal-share-form-submit'
import { shareMeal } from '@/lib/action'

export default function MealsShareForm() {
  const [state, formAction] = useActionState(shareMeal, {})

  return (
    <form className="max-w-200" action={formAction}>
      <div className="flex gap-4 mb-8">
        <p className="w-full">
          <label
            htmlFor="name"
            className="block mb-2 text-base font-bold text-[#b3aea5] uppercase font-[Montserrat]"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={state.values?.name}
            className="block w-full rounded-md border border-[#454952] bg-[#1c2027] px-4 py-2 text-lg font-[Montserrat] text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
          />
        </p>
        <p className="w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-base font-bold text-[#b3aea5] uppercase font-[Montserrat]"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={state.values?.email}
            className="block w-full rounded-md border border-[#454952] bg-[#1c2027] px-4 py-2 text-lg font-[Montserrat] text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d] [&:-webkit-autofill]:bg-[#1c2027] [&:-webkit-autofill]:text-[#ffffff] [&:-webkit-autofill]:shadow-[0_0_0_30px_#1c2027_inset]"
          />
        </p>
      </div>

      <p className="mb-8">
        <label
          htmlFor="title"
          className="block mb-2 text-base font-bold text-[#b3aea5] uppercase font-[Montserrat]"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={state.values?.title}
          className="block w-full rounded-md border border-[#454952] bg-[#1c2027] px-4 py-2 text-lg font-[Montserrat] text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
        />
      </p>

      <p className="mb-8">
        <label
          htmlFor="summary"
          className="block mb-2 text-base font-bold text-[#b3aea5] uppercase font-[Montserrat]"
        >
          Short Summary
        </label>
        <input
          type="text"
          id="summary"
          name="summary"
          defaultValue={state.values?.summary}
          className="block w-full rounded-md border border-[#454952] bg-[#1c2027] px-4 py-2 text-lg font-[Montserrat] text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
        />
      </p>

      <p className="mb-8">
        <label
          htmlFor="instructions"
          className="block mb-2 text-base font-bold text-[#b3aea5] uppercase font-[Montserrat]"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          rows={10}
          defaultValue={state.values?.instructions}
          className="block w-full rounded-md border border-[#454952] bg-[#1c2027] px-4 py-2 text-lg font-[Montserrat] text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
        ></textarea>
      </p>

      <div className="flex items-end justify-between mt-4">
        <ImagePicker />
        <MealShareFormSubmit />
      </div>
    </form>
  )
}
