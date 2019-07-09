import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfigService } from './config.service';
import { LogItem } from '../models/LogItem';

@Injectable({
  providedIn: 'root'
})
export class UpdateLogService {

  constructor(private db: AngularFirestore,
    @Inject(ConfigService) private config) { }

  addLogs(item: LogItem) {
    const date = new Date().toLocaleString();
    item.dateCreated = date;
    item.messageId = date.trim();
    if (item.type === 'ERROR') {
      item.status = 'not fixed';
    }
    return this.db.collection(this.config.logsUrl).add(item);
  }

  updateLogs(item, updates) {
    return this.db.collection(this.config.logsUrl).doc(item.payload.doc.id)
    .update(updates);
  }

  getLogs() {
    return  this.db.collection(this.config.logsUrl).snapshotChanges();
  }

  deleteLogs(item) {
    return this.db.collection(this.config.logsUrl).doc(item.payload.doc.data().messageId).delete();
  }

}
