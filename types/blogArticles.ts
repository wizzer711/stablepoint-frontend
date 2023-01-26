import { Image } from '~/types/global/globalImage'

export interface BlogArticle {
  id: number
  category: string,
  heading: string,
  description: string,
  link: string,
  image: Image
}