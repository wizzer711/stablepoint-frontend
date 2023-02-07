import xss from 'xss'

export default defineNuxtPlugin(() => {
    return {
      provide: {
        sanitize: (data: string) => {
          return xss(data)
        }
      }
    }
  })