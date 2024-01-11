declare global {
  interface Window {
    safari: boolean | undefined
  }
}

export const safariOnMacbook = (): boolean => {
  return window.safari !== undefined
}
