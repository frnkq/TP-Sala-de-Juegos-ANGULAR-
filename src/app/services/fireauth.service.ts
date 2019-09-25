import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(private fireAuth: AngularFireAuth) { }

  public CreateUser(email: string, password: string)
  {
    let retorno;
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(function(userCredentials){
      retorno = userCredentials.user;
      console.log("registered");
      console.log(userCredentials);
    }).catch(function(error){
      console.error(error);
    })
    return retorno;
  }

  public LogIn(email: string, password: string)
  {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
