export interface ResponseApiInterface<T> {
  articles: T,
  last_page: number,
  page: number,
  per_page: number,
  total_count: number

}
export interface ArticleInterface {
  "id": string,
  "author_id": string,
  "title": string,
  "content": string,
  "comments": number,
  "created_at": string,
  "updated_at": string
}
