import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  GridApi,
  GridOptions,
  GridReadyEvent,
  GridSizeChangedEvent,
  IServerSideDatasource,
  IServerSideGetRowsParams
} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import 'ag-grid-enterprise'
import {HttpClient} from "@angular/common/http";
import {ApiInfoInterface, ResponseApiInterface} from "../../_models/share.interface";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

  constructor(private http:HttpClient) {
  }
  private gridApi!:GridApi;
  @Input() gridOptions!:GridOptions
  @Input() apiInfo!:ApiInfoInterface
  @Output() gridReady=new EventEmitter<GridApi>()

  onGridReady(gridReady:GridReadyEvent){
    this.gridApi=gridReady.api
    this.gridReady.emit(gridReady.api)
    this.http.get(this.apiInfo.url,this.apiInfo.params).subscribe({
      next:(res:any)=>{
        const dataSource:IServerSideDatasource={
          getRows(params: IServerSideGetRowsParams): void {
            params.success({
              rowData: res.articles ,rowCount:res.total_count});
          }
        }
        this.gridApi.setGridOption('serverSideDatasource',dataSource);
      },
      error:()=>{}

    })
  }

  onSizeChange(event:GridSizeChangedEvent){
    this.gridApi.sizeColumnsToFit({defaultMinWidth:100})
  }
}
