export {}

declare global {
  interface Window {
    particlesJS: any
    pJSDom?: any[]
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string) => string
  }
}

declare namespace NodeJS {
  interface Timeout {}
}
