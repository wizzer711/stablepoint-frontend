import { Image } from '~/types/global/globalImage'

export interface StripIcons {
    id: number,
    heading: string,
    icon: Image,
    link: string
}

export interface Strip {
    heading?: string,
    description?: string,
}