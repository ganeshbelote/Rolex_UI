import type { Dispatch, SetStateAction } from "react"

export type modeType = 'dark' | 'light'
export interface contextType {
  mode: modeType
  setMode: Dispatch<SetStateAction<modeType>>
}
