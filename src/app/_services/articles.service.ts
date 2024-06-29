import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ArticleInterface, ResponseApiInterface } from "../_models/share.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(page: number, per_page: number): Observable<ResponseApiInterface<ArticleInterface[]>> {
    return this.http.get<ResponseApiInterface<ArticleInterface[]>>('http://127.0.0.1:8080/articles', {
      params: {
        page, per_page

      }
    })
  }

  getArticle(articleId: string): Observable<ArticleInterface> {
    console.log(articleId)
    return this.http.get<ArticleInterface>(`http://127.0.0.1:8080/articles/${articleId}`)
  }
}
