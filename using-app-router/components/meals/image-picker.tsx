'use client'

import Image from 'next/image'
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'

export default function ImagePicker() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!selectedFile) return
    const objUrl = URL.createObjectURL(selectedFile)
    setPreview(objUrl)
    return () => URL.revokeObjectURL(objUrl)
  }, [selectedFile])

  function handlePickerClick() {
    imageInputRef.current?.click()
  }

  function handleCancleButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setSelectedFile(null)
    setPreview(null)
    imageInputRef.current!.value = ''
  }

  function handleImageSelect(event: ChangeEvent<HTMLInputElement>) {
    // event.target.files는 배열이 아니라 FileList 객체
    const file = event.target.files?.[0]
    if (!file) return
    setSelectedFile(file)
  }

  return (
    <div className="relative flex flex-col">
      <label
        className="block mb-2 text-base font-bold text-[#b3aea5] uppercase font-[Montserrat]"
        htmlFor="image"
      >
        <div>YOUR IMAGE</div>
      </label>
      <div
        onClick={handlePickerClick}
        className="relative flex justify-center items-center w-50 h-50 border-2 border-[#b3aea5] cursor-pointer"
      >
        {preview ? (
          <>
            <Image fill src={preview} alt="preview image" />
            <button
              className="absolute -top-1 right-2 z-2 text-[#282c34] text-[1.5rem] font-bold cursor-pointer hover:text-[#6c727e]"
              onClick={handleCancleButtonClick}
            >
              x
            </button>
          </>
        ) : (
          <span>No image picked yet.</span>
        )}
      </div>
      <input
        ref={imageInputRef}
        className="hidden"
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        onChange={handleImageSelect}
      />
    </div>
  )
}
