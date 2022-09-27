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
  @Output() onUpdateQuantity = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  removeProduct(productId: number): void {
    this.onRemoveProduct.emit(productId);
  }
  updateQuantity(inputQuantity: HTMLInputElement, productId: number): void {
    const value = inputQuantity.value;
    const intValue = parseInt(value);
    alert('' + intValue);

    if (intValue < 1) {
      inputQuantity.value = -intValue + '';
    } else if (value.length > 2) {
      inputQuantity.value = value.slice(0, 2);
    }

    this.onUpdateQuantity.emit({
      productId,
      quantity: parseInt(inputQuantity.value) || '',
    });
  }
}
