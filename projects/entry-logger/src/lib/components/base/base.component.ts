import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entry-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  page = 'home';
  constructor() { }

  ngOnInit() {
  }

  changPage(page) {
    this.page = page;
  }

}
