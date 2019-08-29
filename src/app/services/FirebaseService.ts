import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot} from '@angular/fire/firestore'
import { Observable } from 'rxjs';

export interface Usuario {username:string, password:string};
export class FirebaseService
{
    private itemsCollection: AngularFirestoreCollection<Usuario>;
    items: Observable<Usuario[]>;

    users:firebase.firestore.DocumentData[];

    constructor (private firestore: AngularFirestore)
    {
    }

    CreateUser(name:string, surname:string, username:string, password:string) :void
    {
        this.firestore.collection("usuarios").add({username:username, password:password, name:name, surname:surname});
    }
}