export type WeekType = 'I' | 'II' | 'III' | 'IV'

export interface ILeaderboardItem {
  customerId: number
  loginName: string
  place: number
  week: WeekType
}