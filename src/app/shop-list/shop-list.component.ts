import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  constructor(private api:ApiService) {
    this.f()
   }

  f=()=>{
    this.api.shop().subscribe(
      (data)=>{
        this.shopData=data
      }
    )
  }


  shopData:any={}
  ngOnInit(): void {
  }

}
