import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { MessageItem } from '../../models';
import { UserService } from '../../services/user.service';
import { CryptojsService } from '../../services';

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
  initial = '';
  constructor(private messageService: MessageService, 
    private userService: UserService,
    private cryptoJsService: CryptojsService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.userService.getUser(this.cryptoJsService.encryptUsingAES256(this.username)).subscribe((data: any) => {
       this.messageService.addMessage({
        dateSent: new Date().toLocaleString(),
        from: this.username,
        message: this.message,
        color:  data[0].payload.doc.data().color
      });
      this.message = '';
   });
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

  getColor(message) {
  }

  getInitial(username) {
    return username.substring(0, 1);
  }

}
