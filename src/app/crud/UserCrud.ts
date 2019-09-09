import { User } from '../models/User';
import { FirebaseService } from '../services/FirebaseService';
import { FireAuthService } from '../services/FireAuthService';
import { AngularFirestore } from 'firebase/firestore';
import { AngularFireAuth } from 'firebase/auth';

export class UserCrud
{  
    private firebaseService:FirebaseService;
    private fireAuthService: FireAuthService;
    constructor(private firestore:AngularFirestore, private fireauth: AngularFireAuth)
    {
        this.firebaseService = new FirebaseService(firestore);
        this.fireAuthService = new FireAuthService(fireauth);
    }

    public Register(user:User)
    {
        let userId = this.fireAuthService.CreateUser(user.name, user.email, user.username, user.password);
        this.SaveUser(user);
        //return true;
    }

    public SaveUser(user:User) :boolean
    {
        this.firebaseService.CreateUser(user.name, user.email, user.username);
        return true;
    }
}