import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { randomBytes } from 'crypto'
import type { IUser } from '@/types/user'

export const fakeUsers: IUser[] = [
  {
    id: '1',
    email: 'admin@coderthemes.com',
    username: 'admin',
    password: 'password',
    firstName: 'Admin',
    lastName: 'Coderthemes',
    role: 'admin',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InN1cHBvcnRAY29kZXJ0aGVtZXMuY29tIiwibGFzdE5hbWUiOiJDb2RlcnRoZW1lcyIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJUZXN0VG9rZW4ifQ.1StUQa0dF1HZ5gwyfhXPcvxqQSYEiGXk6QbbsvVKXGNQLt0bdTlcf0sOwvZPyOgMbEyoMQHBOfn9nAOMQmhWoA',
  },
  {
    id: '2',
    email: 'user@coderthemes.com',
    username: 'user',
    password: 'password',
    firstName: 'User',
    lastName: 'Coderthemes',
    role: 'user',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InN1cHBvcnRAY29kZXJ0aGVtZXMuY29tIiwibGFzdE5hbWUiOiJDb2RlcnRoZW1lcyIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJUZXN0VG9rZW4ifQ.1StUQa0dF1HZ5gwyfhXPcvxqQSYEiGXk6QbbsvVKXGNQLt0bdTlcf0sOwvZPyOgMbEyoMQHBOfn9nAOMQmhWoA',
  },
]

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'text',
          placeholder: 'Enter your username',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },

      async authorize(credentials, req) {
        const filteredUser = fakeUsers.find((user) => {
          return user.email === credentials?.email && user.password === credentials?.password
        })
        if (filteredUser) {
          return filteredUser
        } else {
          throw new Error('Email or Password is not valid')
        }
      },
    }),
  ],
  secret: 'kvwLrfri/MBznUCofIoRH9+NvGu6GqvVdqO3mor1GuA=',
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },

    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    session: ({ session, token }) => {
      session.user = token
      return Promise.resolve(session)
    },
  },
  session: {
    // jwt: true,
    maxAge: 24 * 60 * 60,
    generateSessionToken: () => {
      return randomBytes(32).toString('hex')
    },
  },
}
