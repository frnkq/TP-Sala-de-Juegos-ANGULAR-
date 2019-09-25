import { User } from '../models/User';
import { FirestoreService } from '../services/firestore.service';
import { FireauthService } from '../services/fireauth.service';

export class UserCrud
{  
    constructor(private firestore: FirestoreService, private fireauth: FireauthService)
    {
    }

    public Register(user:User)
    {
        let createdUser = this.fireauth.CreateUser(user.email, user.password);

        this.SaveUser(user);
        return createdUser;
    }

    public SaveUser(user:User) :boolean
    {
        this.firestore.CreateUser(user);
        return false;
    }
}