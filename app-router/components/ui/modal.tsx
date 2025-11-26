'use client'

import { useEffect } from 'react'

export default function Modal({
  onClose,
  message,
}: {
  onClose: () => void
  message: string
}) {
  // ESC 키로 닫기
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    // body 스크롤 막기
    // document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      //   document.body.style.overflow = 'unset'
    }
  }, [onClose])

  // 배경 클릭 시 닫기
  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-message"
    >
      <div className="bg-[#1c2027] rounded-lg p-6 max-w-md mx-4 shadow-lg border border-[#454952]">
        <h2
          id="modal-title"
          className="text-2xl font-bold text-[#f9572a] mb-4 font-[Montserrat]"
        >
          INVALID INPUT
        </h2>
        <p id="modal-message" className="text-[#ddd6cb] mb-6">
          {message}
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold px-6 py-2 rounded-md hover:from-[#fd4715] hover:to-[#f9b241] transition-all duration-300"
            autoFocus
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}
