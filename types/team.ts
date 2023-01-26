import { Image } from '~/types/global/globalImage'

export interface TeamMember {
    id: number
    name: string,
    role: string,
    image: Image
}