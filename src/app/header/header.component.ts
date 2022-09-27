import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Shopping Cart';
  @Input() numberItems: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
