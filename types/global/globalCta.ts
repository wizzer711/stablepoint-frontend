import { Page } from '~/types/global/globalPageRelation'
export interface Cta {
    id: number,
    external_link: string,
    url: string,
    hash: string,
    target: string,
    label: string,
    liveChatTrigger: boolean,
    internal_link: Page
}