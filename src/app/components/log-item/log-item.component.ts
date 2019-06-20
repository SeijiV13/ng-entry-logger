import { Component, OnInit, Input } from '@angular/core';
import { MessageItem } from 'src/app/models/MessageItem';

@Component({
  selector: 'log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.scss']
})
export class LogItemComponent implements OnInit {
  @Input() items: MessageItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
