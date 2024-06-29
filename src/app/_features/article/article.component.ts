import { Component, inject } from '@angular/core';
import { ArticleInterface } from "../../_models/share.interface";
import { ArticlesService } from "../../_services/articles.service";
import { ActivatedRoute, Params } from "@angular/router";
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
interface activeRouteInterface {
  id: string
}
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  private articleId: string = ""
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  constructor() {
    this.activatedRoute.params.subscribe({
      next: (res: Params) => {
        this.articleId = res['id']
        this.article$=this.articleService.getArticle( res['id'])
      }
    })
  }
  private articleService = inject(ArticlesService)
  protected article$!: Observable<ArticleInterface>
}
