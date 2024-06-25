import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",loadComponent:()=>import('./_features/articles/articles.component').then(c=>c.ArticlesComponent)}
];
