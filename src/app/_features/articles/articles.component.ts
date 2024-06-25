import { Component, inject, Input, OnInit } from '@angular/core';
import { ArticleInterface, ResponseApiInterface } from "../../_models/share.interface";
import { ArticlesService } from "../../_services/articles.service";
import {concatMap, map, mergeMap, Observable, of, switchMap, tap} from "rxjs";
import { CommonModule } from "@angular/common";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {PaginatorModule, PaginatorState} from "primeng/paginator";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, Button, CardModule, PaginatorModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  private articleService = inject(ArticlesService)
  protected articlesResponse$: Observable<ResponseApiInterface<ArticleInterface[]>> = this.articleService.getArticles(1, 10)
  protected onPageChange(event:PaginatorState){
      this.articlesResponse$= this.articleService.getArticles(event.page ? event.page+1:1,event.rows ? event.rows :  10).pipe()
  }
  ngOnInit(): void {}
}
