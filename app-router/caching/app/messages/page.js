import Messages from '@/components/messages'

export const dynamic = 'force-dynamic'

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
    next: { tags: ['msg'] }, // <- Next js에선 쿼리키 부여하듯이 요청에 tag를 넣을 수 있다.
    // 나중에 해당 tag 캐시 무효화 할 땐, revalidateTga('msg')를 호출하면 된다.
  })
  const messages = await response.json()

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>
  }

  return <Messages messages={messages} />
}
