import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfigService } from './config.service';
import { User } from '../models/User';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore,
    @Inject(ConfigService) private config) { }

  addUser(user: User) {
    return this.db.collection(this.config.usersUrl).add(user);
  }

  updateUser(item, updates) {
    return this.db.collection(this.config.userssUrl).doc(item.payload.doc.id)
    .update(updates);
  }

  getUsers() {
    return  this.db.collection(this.config.usersUrl).snapshotChanges();
  }

  deleteUser(item) {
    return this.db.collection(this.config.usersUrl).doc(item.payload.doc.data().messageId).delete();
  }

  getUser(username) {
    return this.db.collection(this.config.usersUrl,
       ref => ref.where('username', '==', username)).snapshotChanges();
  }

  getUserOnce(username) {
    return this.db.collection(this.config.usersUrl,
      ref => ref.where('username', '==', username)).valueChanges().pipe(take(1));
  }

}
