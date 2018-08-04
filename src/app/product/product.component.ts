import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  @Output() productClickedOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickedRemove() {
    this.productClickedOut.emit();
  }

}
