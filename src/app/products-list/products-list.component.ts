import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products=[
    {
    name:'PRODUCT ITEM NUMBER 1',
    description:'Description for product item number 1',
    thumbnail:'https://via.placeholder.com/200x150',
    price:5.99,
    quantity:2
  },
  {
    name:'PRODUCT ITEM NUMBER 2',
    description:'Description for product item number 2',
    thumbnail:'https://via.placeholder.com/200x150',
    price:9.99,
    quantity:1
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
