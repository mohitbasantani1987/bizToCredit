import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableDataService } from '../custom-services/table-data.service';
import { Table } from '../models/isp-table.model';
import { FlexLayoutModule } from '@angular/flex-layout';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns = [
    'name',
    'rating',
    'lowestPrice'
];

  @ViewChild(MatSort) sort: MatSort;
  public dataSource = new MatTableDataSource<Table>();

  isTableDataReady: boolean;
  displayTableContent:boolean;
  selectedRow : boolean;
  currentRate = 0;
  description:string;
  contactNo:number;
  email:string;
  rating:string;
  maxSpeed:string;
  image:string;
  url:string;
  minPrice:number;
  provider:string;




  constructor(private tableDataService: TableDataService,) { }

  ngOnInit(): void {
    this.isTableDataReady = false;
    this.getTableData()
    this.description = "";
    this.contactNo = 999999999;
    this.image = "default.png";
    this.email = "a@gmail.com";
    this.provider = "Default Provider";
    this.maxSpeed = "100mbps";
    this.minPrice = 1000;
  }
  getTableData() {
    this.tableDataService.getTableData().subscribe((data) =>{
      this.dataSource.data = data as Table[];
      this.dataSource.sort = this.sort;
    });
    this.isTableDataReady = true;
    this.displayTableContent = true;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onRowClicked(row) {

    if(!this.selectedRow)
    {
      this.selectedRow = row;
    }   
    else
    {
      this.selectedRow = row;
    }
     this.minPrice = row.lowestPrice;
     this.provider = row.name;
     this.rating = row.rating;
     this.currentRate = parseInt(this.rating.split(" ")[0]);
     this.tableDataService.getTableDataById(row._id)
     .subscribe((data)=>{
       console.log(data);
       this.description = data.description;
       this.contactNo = data.contactNo;
       this.email = data.email;
       this.maxSpeed = data.maxSpeed;
       this.image = data.image;
       this.url = data.url;
     })
 }
}
