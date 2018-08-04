import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products = ['A Book', 'A Tree'];
  productName = 'A Book';
  isDisabled = true;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(form) {
    if (form.valid) {
      this.products.push(form.value.productName);
    }
  }

  ngOnInit() {
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
