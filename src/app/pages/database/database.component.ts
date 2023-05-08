import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor() { }
  showmore: any = false
  data: any = [
    {id:"0000",Merchant:"Lala Restaurant",Date:"12/12/2023",Category:"Restaurant",Location:"Fashion Island",Country:"Thailand"}
]
  ngOnInit(): void {
    for(let i = 0; i < 15;i++){
    this.data.push({id:"001"+i,Merchant:"Lala Restaurant",Date:"12/12/2023",Category:"Restaurant",Location:"Fashion Island",Country:"Thailand"})
    }
  }

  show() {
    this.showmore = !this.showmore
  }

  addpage(){
    window.location.href='/add-merchant'
  }
  viewmap(){
    window.location.href='/view-on-map'
  }

}
