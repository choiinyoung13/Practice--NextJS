// components/ui/loading-dots.js
export default function LoadingDots() {
  return (
    <div className="flex items-center justify-center min-h-[200px] gap-2">
      <div
        className="w-3 h-3 bg-[#f9572a] rounded-full animate-bounce"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="w-3 h-3 bg-[#ff9b05] rounded-full animate-bounce"
        style={{ animationDelay: '0.1s' }}
      ></div>
      <div
        className="w-3 h-3 bg-[#f9572a] rounded-full animate-bounce"
        style={{ animationDelay: '0.2s' }}
      ></div>
    </div>
  )
}
