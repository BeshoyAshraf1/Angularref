import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  storeInfo : StoreData;
  isimageshown:boolean=true;
  constructor(){
    this.storeInfo=new StoreData('iti','assets/levi.png',['cairo','alex','qena']);
  }
  ngOnInit(): void {
    
  }
  toggleimage(){
    this.isimageshown=!this.isimageshown;
  }

}
