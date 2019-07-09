import { Injectable, Inject } from '@angular/core';
import { MessageItem } from '../models/MessageItem';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private db: AngularFirestore,
    @Inject(ConfigService) private config) { }

  addMessage(item: MessageItem) {
    const date = new Date().toLocaleString();
    item.dateSent = date;
    return this.db.collection(this.config.messageUrl).add(item);
  }

  getMessages() {
    return  this.db.collection(this.config.messageUrl, ref => 
      ref.orderBy('dateSent')
      ).snapshotChanges();
  }

  deleteMessage(item) {
    return this.db.collection(this.config.messageUrl).doc(item.payload.doc.data().messageId).delete();
  }

}
