import { Component, inject, Input, OnInit } from '@angular/core';
import { ArticleInterface, ResponseApiInterface } from "../../_models/share.interface";
import { ArticlesService } from "../../_services/articles.service";
import {concatMap, map, mergeMap, Observable, of, switchMap, tap} from "rxjs";
import { CommonModule } from "@angular/common";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {PaginatorModule, PaginatorState} from "primeng/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, Button, CardModule, PaginatorModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  private router:Router=inject(Router)
  private articleService = inject(ArticlesService)
  protected articlesResponse$: Observable<ResponseApiInterface<ArticleInterface[]>> = this.articleService.getArticles(1, 9)
  protected onPageChange(event:PaginatorState){
    this.articlesResponse$=this.articleService.getArticles(event.page ? event.page+1:1,event.rows ? event.rows :  9)
  }

  protected onDetail(event: any,articleId:string) {
    this.router.navigate([`articles/${articleId}`])

  }
  ngOnInit(): void {}
}
