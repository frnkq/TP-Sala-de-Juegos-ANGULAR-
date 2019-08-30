import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot} from '@angular/fire/firestore'
import { Observable } from 'rxjs';

export interface Usuario {username:string, password:string};
export class FirebaseService
{

    constructor (private firestore: AngularFirestore)
    {
    }

    CreateUser(name:string, email:string, username:string) :void
    {
        //id set same as id in Fireauth
        //this.firestore.collection("usuarios").doc(userId).set({username:username, name:name, email:email});
        //generated id
        this.firestore.collection("usuarios").add({username:username, name:name, email:email});
    }
}