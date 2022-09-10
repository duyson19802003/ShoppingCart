import { Component, OnInit } from '@angular/core';

class Product {
  id: string = '';
  name: string = '';
  description: string = '';
  thumbnail: string = '';
  price: number = 0;
  quantity: number = 0;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2,
    },
    {
      id: '2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    },
    {
      id: '3',
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 19.99,
      quantity: 5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  removeProduct(productId: string): void {
    const index = this.products.findIndex((p) => p.id === productId);
    this.products.splice(index, 1);
  }
}
