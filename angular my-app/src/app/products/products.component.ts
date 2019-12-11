import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor(myService: ProductService) {
    console.log('Hi from Products Component');
    myService.getData()
    .subscribe(responseData => {
      console.log('this is my data');
      console.log(responseData);
      this.products = responseData;
    }, error => {
      console.log(error);
    });
    console.log('subscription ended');
  }

  ngOnInit() {
  }

}
