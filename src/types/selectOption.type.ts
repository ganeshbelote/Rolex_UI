export type OptionProps = {
  value: string
  children: string
  Active?: boolean
  onClick?: () => void
}

export type SelectProps = {
  Title ?: string
  children: React.ReactElement<OptionProps>[]
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}