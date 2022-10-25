import { WindowI } from './Window.model'

export interface ProjectI {
  id: string | number
  title: string
  address: string
  client: string
  total: number
  windows: WindowI[]
}
