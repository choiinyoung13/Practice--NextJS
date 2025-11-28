import sql from 'better-sqlite3'
import { unstable_cache } from 'next/cache'
import { cache } from 'react'

const db = new sql('messages.db')

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`)
}

initDb()

export function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message)
}

/* 자체 데이터 소스에서 데이터를 캐시하는 방법 */

// cache => 서버 함수의 결과를 캐싱해서 불필요한 재실행(특히 DB 쿼리)을 막아주는 React 서버 전용 함수.
// 서버에서만 동작(클라이언트 X)
// 서버 재시작하면 캐시 초기화됨

// unstable_cache => Next.js의 데이터 캐시를 사용하여 함수 결과를 캐싱하는 함수
// - 첫 번째 인자: 캐시할 함수 (cache로 감싸서 React 요청 단위 캐싱과 함께 사용)
// - 두 번째 인자: 캐시 키 배열 (같은 키를 가진 함수는 같은 캐시를 공유)
// - 세 번째 인자: 캐시 옵션
//   * tags: 캐시 태그 (revalidateTag로 특정 태그의 캐시만 무효화 가능)
//   * revalidate: 캐시 유효 시간(초 단위, 선택사항)
// - 서버 재시작해도 캐시는 유지됨 (Next.js 데이터 캐시에 저장)
// - 빌드 시점과 런타임 모두에서 동작
export const getMessages = unstable_cache(
  cache(function getMessages() {
    console.log('Fetching messages from db')
    return db.prepare('SELECT * FROM messages').all()
  }),
  ['message'], // 캐시 키: 'message'라는 키로 캐시됨
  { tags: ['msg'] } // 캐시 태그: 'msg' 태그로 무효화 가능
)
