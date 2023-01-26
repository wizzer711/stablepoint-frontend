import { Cta } from '~/types/global/globalCta'
import { Image } from '~/types/global/globalImage'

export interface Billboard {
    pre_heading?: string,
    heading?: string,
    description?: string,
    ctas?: Array<Cta>,
    image?: Image
}