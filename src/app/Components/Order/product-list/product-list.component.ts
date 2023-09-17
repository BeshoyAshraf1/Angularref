import { Component,OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 prdlist:Iproduct[];
 catlist:Icategory[];
 selaectedcategoryid:number=0;
 ordertotalprice:number=0;
  constructor(){
    this.catlist=[{id:1,name:'labtop1'},{id:2,name:'labtop2'},{id:3,name:'labtop3'}]
    this.prdlist=[{id:100,name:'lenovo',price:100,quantity:1,imageurl:'https://fakeimg.pl/250x100/',categoryID:1},
    {id:200,name:'dell',price:150,quantity:3,imageurl:'https://fakeimg.pl/250x100/',categoryID:1},
    {id:300,name:'Hp',price:1250,quantity:0,imageurl:'https://fakeimg.pl/250x100/',categoryID:1},
   {id:400,name:'tablets',price:2350,quantity:5,imageurl:'https://fakeimg.pl/250x100/',categoryID:3},
    {id:500,name:'apple',price:13450,quantity:2,imageurl:'https://fakeimg.pl/250x100/',categoryID:2},
    {id:600,name:'iphone',price:12150,quantity:5,imageurl:'https://fakeimg.pl/250x100/',categoryID:2}];

  }

  ngOnInit(): void {
    
  }
  buy(prodId:number,count:any){
    //ways to convert the attribute from integer to number if itits type is any 
    // let itemcountno:number=count;
    // let itemscountno:number;
    // itemscountno=parseInt(count);
    // itemscountno=Number(count);
    // itemscountno=count as number;//at3aml m3ah 3la ano numbr
    this.ordertotalprice =+count *prodId;//at3aml m3aha 3la anha number lma adef +
    
  }
  changedirectory(){
    this.selaectedcategoryid=1;
  }
  prdtrackbyfn(index:number,prd:Iproduct):number
  {
     return prd.id;
  }
}
