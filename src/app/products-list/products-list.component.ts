import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() onRemoveProduct = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  removeProduct(productId: string): void {
    this.onRemoveProduct.emit(productId);
  }
  updateQuantity(quantity: any, productId: string): void {
    console.log('The quantity is: ' + quantity.value);
    if (quantity.value == 0) this.removeProduct(productId);
  }
}
