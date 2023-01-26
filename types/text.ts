import { Cta } from '~/types/global/globalCta'
import { Link } from '~/types/global/globalLink'
import { Image } from '~/types/global/globalImage'

export interface Text {
    pre_heading?: string,
    heading?: string,
    description?: string,
    alignment?: string,
    ctas?: Array<Cta>
    text_links?: Array<Link>
}

export interface TextWithBackgroundImage {
    pre_heading?: string,
    heading?: string,
    description?: string,
    alignment?: string,
    ctas?: Array<Cta>
    text_links?: Array<Link>
    image: Image
}