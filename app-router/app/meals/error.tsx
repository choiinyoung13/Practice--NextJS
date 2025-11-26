/*
서버 컴포넌트: 서버에서 HTML만 만들어 보내는 컴포넌트, 동적 이벤트 불가
클라이언트 컴포넌트: 브라우저에서 JS 실행 가능, 이벤트 처리 가능 → 'use client' 필요
에러 처리, 버튼 클릭, 실시간 상태 반영 등 실시간 반응이 필요한 UI는 클라이언트 컴포넌트로 만들어야 함
*/
'use client'

export default function Error() {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetcg meal data. Please try again later.</p>
    </main>
  )
}
