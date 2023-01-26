interface Seo {
    id: number,
    metaTitle: string,
    metaDescription: string,
    keywords: string,
    metaRobots: string,
    structuredData: string | null,
    metaViewport: string | null,
    canonicalURL: string | null
}

export interface Page {
    id: number,
    seo: Seo,
    title: string,
    slug: string,
    hreflangOverride: string,
    createdAt: string,
    locale: string,
    localizations: Array<string>,
    updatedAt: string
}