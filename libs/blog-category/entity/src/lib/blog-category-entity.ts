export interface BlogCategoryEntity {
  id: number,
  name: BlogCategoryName,
  slug: BlogCategorySlug
}

export const blogCategoryNameBySlug = {
  books: "Books",
  accessories: "Accessories",
  music: "Music",
  toys: "Toys",
  audiobooks: "Audiobooks",
  news: "News"
} as const;

export type BlogCategorySlug = keyof typeof blogCategoryNameBySlug
export type BlogCategoryName = typeof blogCategoryNameBySlug[BlogCategorySlug]
