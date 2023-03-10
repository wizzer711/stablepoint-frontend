interface ImageFormat {
    ext: string,
    url: string,
    hash: string,
    mime: string,
    name: string,
    path: null,
    size: number,
    width: number,
    height: number
}
export interface Image {
    id: number,
    name: string,
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    formats: Formats,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: null,
    provider: string,
    provider_metadata: null,
    createdAt: string,
    updatedAt: string
}
export interface Formats {
    thumbnail: ImageFormat
    small: ImageFormat,
    medium: ImageFormat,
    large: ImageFormat,
}