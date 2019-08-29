import { User } from '../models/User';
import { FirebaseService } from '../services/FirebaseService';
import { AngularFirestore } from '@angular/fire/firestore';

export class UserCrud
{  
    private firebase:FirebaseService;

    constructor(private firestore:AngularFirestore)
    {
        this.firebase = new FirebaseService(firestore);
    }

    public Register(user: User): boolean
    {

    }
    /*
    public Register(user:User) :boolean
    {
        this.firebase.CreateUser(user.name, user.surname, user.username, user.password);
        return true;
    }
    */
}