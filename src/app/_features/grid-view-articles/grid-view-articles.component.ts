import { Component } from '@angular/core';
import {GridComponent} from "../../_share/grid/grid.component";
import {GridApi, GridOptions} from "ag-grid-community";
import {ApiInfoInterface} from "../../_models/share.interface";

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [
    GridComponent
  ],
  templateUrl: './grid-view-articles.component.html',
  styleUrl: './grid-view-articles.component.scss'
})
export class GridViewArticlesComponent {

  protected apiInfo:ApiInfoInterface={
    url:'http://127.0.0.1:8080/articles',
    params:{
      // page:1, per_page:10
    }
  }
  protected gridApi!:GridApi
  protected gridOptions:GridOptions={
    columnDefs:[
      {headerName:"Id",field:'id'},
      {headerName:"Id نویسنده",field:'author_id'},
      {headerName:"عنوان",field:'title'},
      {headerName:"محتوا",field:'content'},
      {headerName:"کامنت ها",field:'comments'},
      {headerName:"تاریخ ایجاد",field:'created_at'},
      {headerName:"تاریخ ویرایش",field:'updated_at'},
    ]
  }
  protected gridReady(api:GridApi){
    this.gridApi=api
  }
}
