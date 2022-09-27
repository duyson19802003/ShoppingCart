import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 19.99,
      quantity: 5,
    },
  ];

  numberItems: number = 2;
  subTotal: number = 5;

  removeProduct(productId: number) {
    // alert('Remove product: ' + productId);
    const index = this.products.findIndex((p) => p.id === productId);
    if (index !== -1) this.products.splice(index, 1);

    let numberItems = 0;
    let subTotal = 0;
    for (const product of this.products) {
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }

    this.numberItems = numberItems;
    this.subTotal = subTotal;
  }
}
