/* 아래와 같이 설정하면 요청을 캐싱하지 않고 새 요청을 항상 전송하고 응답을 재사용하지 않음
  const response = await fetch('http://localhost:8080/messages', {
     cache: 'no-store'
   }); 
*/

import { unstable_noStore } from 'next/cache'

/* 아래와 같이 설정하면 5초동안 캐시된 데이터를 재사용하라는 뜻
   const response = await fetch('http://localhost:8080/messages', {
     next: {
       revalidate: 5
     }
   }); 
*/

// export const revalidate = 5            // <- 이렇게만 적어도 요청에 revalidate: 5가 적용됨
// export const dynamic = 'force-dynamic' // <- cache: 'no-store'가 적용됨

export default async function MessagesLayout({ children }) {
  // unstable_noStore()  // <- 함수 호출만으로 cache: 'no-store'가 적용됨

  const response = await fetch('http://localhost:8080/messages')
  const messages = await response.json()
  const totalMessages = messages.length

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  )
}
