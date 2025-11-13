interface IUser {
  id: number
  name: string
}

export interface IPostWithUser {
  id: number
  title: string
  body: string
  user:IUser
}