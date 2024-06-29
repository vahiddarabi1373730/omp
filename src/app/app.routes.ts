import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",loadComponent:()=>import('./_features/articles/articles.component').then(c=>c.ArticlesComponent)},
  {path:"articles/:id",loadComponent:()=>import('./_features/article/article.component').then(c=>c.ArticleComponent)},
  {path:"grid-view-articles",loadComponent:()=>import('./_features/grid-view-articles/grid-view-articles.component').then(c=>c.GridViewArticlesComponent)}
];
