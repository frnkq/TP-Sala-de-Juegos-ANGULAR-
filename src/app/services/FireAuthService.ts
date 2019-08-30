import { AngularFireAuth } from '@angular/fire/auth' 
export class FireAuthService
{
    constructor (private fireauth: AngularFireAuth)
    {
    }

    CreateUser(name:string, email:string, username:string, password:string) :void
    {
        let userId = "";
        this.fireauth.auth.createUserWithEmailAndPassword(email, password).then(res=>
            {
                console.log("registrado :) "+email);
            }).catch(error=>{
                console.log("error al registrar");
                return null;
            });
    }

    async LogIn(email:string, password:string)
    {
        return await this.fireauth.auth.signInWithEmailAndPassword(email, password).then(res=>
            {
                console.log("bienvenido")
                return res.user;
            }).catch(error=>{
                console.log("error al iniciar sesion");
                console.log(error);
            })
    }

}