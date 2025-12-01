import db from './db'

export function createUser(email, password) {
  const result = db
    .prepare('INSER INTO users (email, password) VALUES (?, ?)')
    .run(email, password)
  return result.lastInsertRowid
}
