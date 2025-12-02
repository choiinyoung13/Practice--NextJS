import { Lucia } from 'lucia'
import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite'
import db from './db'
import { cookies } from 'next/headers'

const adapter = new BetterSqlite3Adapter(db, {
  user: 'users',
  session: 'sessions',
})
const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
})

export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  const cookieStore = await cookies()

  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
}

export async function verifyAuth() {
  const cookieStore = await cookies()
  const sessionCookies = cookieStore.get(lucia.sessionCookieName)

  if (!sessionCookies) {
    return {
      user: null,
      session: null,
    }
  }

  const ssesionId = sessionCookies.value

  if (!ssesionId) {
    return {
      user: null,
      session: null,
    }
  }

  const result = await lucia.validateSession(ssesionId)

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id)
      cookieStore.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )
    }

    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      cookieStore.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )
    }
  } catch {}

  return result
}

export async function destroySession() {
  const { session } = await verifyAuth()
  if (!session) {
    return {
      error: 'Unauthorized!',
    }
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  const cookieStore = await cookies()

  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
}
