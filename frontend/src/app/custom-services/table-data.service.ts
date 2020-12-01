import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  private tableDataUrl = AppConstants.baseURL + '/api/home';
  private tableDataByIdUrl = AppConstants.baseURL + '/api/details'

  private header = new HttpHeaders({ 'Content-Type': 'application/json' })
  private dataSource: any;
  private row: any;

  constructor(private http: HttpClient) { }

  getTableData() {
    return this.http.get<any[]>(this.tableDataUrl, { headers: this.header });
  }

  getTableDataById(id: string): Observable<any>{
    return this.http.get<any>(this.tableDataByIdUrl + "/" + id);
}


  setDataSource(dataSource) {
    this.dataSource = dataSource;
}

 setRow(row) {
      this.row = row;
  }     
}
