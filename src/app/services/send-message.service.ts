import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  private dbName = 'messages';

  constructor(private db: AngularFirestore) {}

  newMessage = async (data: any = {}) => {
    let date = new Date();
    return await this.db
      .collection(this.dbName)
      .doc(date.toLocaleString().replace('/', '-').replace('/', '-'))
      .set(data)
      .catch((err) => {
        console.log(err);
      });
  };
}
