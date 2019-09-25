import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore/';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  CreateUser(user)
  {
    let retorno;
    this.firestore.collection("usuarios").add(user).then(function(documentReference){
      retorno = documentReference.id;
    }).catch(function(error){
      console.error(error);
    });
    return retorno;
  }
}
