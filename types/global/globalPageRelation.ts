interface Data {
  id: number,
  title: string,
  slug: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string
}

export interface Page {
  data: Data
}