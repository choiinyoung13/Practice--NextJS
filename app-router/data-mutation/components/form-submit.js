'use client'

import { useFormStatus } from 'react-dom'

export default function FormSubmit() {
  const { pending } = useFormStatus()

  if (pending) {
    return <span>Loading...</span>
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  )
}
