import { IUser } from './user'

declare module 'next-auth' {
  type Session = {
    user?: IUser
  }
}
