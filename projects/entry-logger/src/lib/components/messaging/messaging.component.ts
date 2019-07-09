import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { MessageItem } from '../../models';

@Component({
  selector: 'entry-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  messages: any[] = [];
  message = '';
  login = false;
  username = '';
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.addMessage({
      dateSent: new Date().toLocaleString(),
      from: this.username,
      message: this.message,
    });
    this.message = '';
  }

  loggedIn(object) {
    this.login = object.status;
    this.username = object.username;
    if (this.login) {
      this.messageService.getMessages().subscribe((data) => {
        this.messages = data;
      });
    }

  }

}
