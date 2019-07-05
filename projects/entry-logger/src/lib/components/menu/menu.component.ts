import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'entry-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() pageShift = new EventEmitter();
  url = 'home';
  menuOpen = true;

  constructor() {}

  ngOnInit() {
  }

  changeRoute(path) {
    this.url = path;
    this.pageShift.emit(path);
  }


}
