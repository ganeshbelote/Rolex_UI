export type ToastType = {
  id: number
  message: string
  type: 'success' | 'info' | 'error' | 'warning'
}

export type ToastContextType = {
  addToast: (message: string, type: ToastType['type']) => void
  removeToast: (id: number) => void
}