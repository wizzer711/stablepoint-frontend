import Markdown from 'markdown-it'
import xss from 'xss'

export default defineNuxtPlugin(() => {
    const md = new Markdown({ html: true })
    return {
      provide: {
        parseMarkdownInline: (data: string) => {
          if(isUndefined(data)){
            return data
          }
          const sanitizedData = xss(data);
          return md.renderInline(sanitizedData)
        }
      }
    }
  })