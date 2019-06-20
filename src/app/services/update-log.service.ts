import { Injectable } from '@angular/core';
import { MessageItem } from '../models/MessageItem';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UpdateLogService {

  constructor(private db: AngularFirestore) { }

  addLogs(item: MessageItem) {
    const date = new Date().toLocaleString();
    item.dateCreated = date;
    item.messageId = date.trim();
    return this.db.collection('message-item').add(item);
  }

  updateLogs(item, updates) {
    return this.db.collection('message-item').doc(item.payload.doc.messageId)
    .set(updates)
  }

  getLogs() {
    return  this.db.collection('/message-item').snapshotChanges();
  }

  deleteLogs(item) {
    return this.db.collection('message-item').doc(item.payload.doc.messageId).delete();
  }

}
