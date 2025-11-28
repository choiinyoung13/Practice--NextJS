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
export const getMessages = unstable_cache(
  cache(function getMessages() {
    console.log('Fetching messages from db')
    return db.prepare('SELECT * FROM messages').all()
  }),
  ['message'],
  { tags: ['msg'] }
)
