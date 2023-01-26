import { Image } from '~/types/global/globalImage'

export interface Review {
    id: number,
    heading: string,
    description: string,
    avatar: Image
    name: string,
    role: string
}