import { Injectable, Inject } from '@angular/core';
import { MessageItem } from '../models/MessageItem';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateLogService {

  constructor(private db: AngularFirestore,
    @Inject(ConfigService) private config) { }

  addLogs(item: MessageItem) {
    const date = new Date().toLocaleString();
    item.dateCreated = date;
    item.messageId = date.trim();
    if (item.type === 'ERROR') {
      item.status = 'not fixed';
    }
    return this.db.collection(this.config.url).add(item);
  }

  updateLogs(item, updates) {
    return this.db.collection(this.config.url).doc(item.payload.doc.id)
    .update(updates);
  }

  getLogs() {
    return  this.db.collection(this.config.url).snapshotChanges();
  }

  deleteLogs(item) {
    return this.db.collection(this.config.url).doc(item.payload.doc.data().messageId).delete();
  }

}
