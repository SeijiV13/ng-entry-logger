import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MessageItem } from '../../models/MessageItem';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'entry-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.scss']
})
export class LogItemComponent implements OnInit {
  @Input() items: MessageItem[] = [];
  @Output() dataEmitter = new EventEmitter();
  statusForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.statusForm = this.fb.group({
      status: []
    });
  }

  updateItem(status, item) {
    item.status = status;
    this.dataEmitter.emit({status, item});
  }

}
