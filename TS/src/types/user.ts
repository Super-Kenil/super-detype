export type IUser = {
  id: string
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: 'admin' | 'user'
  token: string
}
