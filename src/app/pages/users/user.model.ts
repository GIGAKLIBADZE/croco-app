interface ICompanyName {
  name: string
}

export interface IUser {
lastName: any
firstName: any
  id: number
  name: string
  username: string
  email: string
  phone: string
  company: ICompanyName
}
