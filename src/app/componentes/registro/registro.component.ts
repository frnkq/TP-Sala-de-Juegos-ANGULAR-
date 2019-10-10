import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit
{

  /* constructor( private miConstructor:FormBuilder) { }
   email=new FormControl('',[Validators.email]);
   formRegistro:FormGroup=this.miConstructor.group({
     usuario:this.email
   });*/
  registerForm: FormGroup;
  loginForm: FormGroup;
  message;
  wantsToLogIn;
  constructor(private userService: LocalStorageService, private router:Router) {
   }


  ngOnInit()
  {
    this.registerForm = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,

      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    });

    this.loginForm = new FormGroup({
      'emailLogin': new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      'passwordLogin': new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    });

    if(localStorage.getItem("currentUser"))
      this.router.navigate(["/"]);
  }
  
  LogIn()
  {
    console.log("hello");
    if(this.loginForm.valid)
    {
      this.message = null;
      let email = this.loginForm.controls.emailLogin.value;
      let password = this.loginForm.controls.passwordLogin.value;
      let result = this.userService.LogIn(email, password);
      console.log(result);
      setTimeout(()=>{}, 3000);
      if(!result)
      {
        this.message = "Hubo un error al iniciar sesion, por favor intente de nuevo";
      }
      else
      {
        this.router.navigate(["/"]);
      }
    }
    else
    {
        this.message = "Hubo un error al iniciar sesion, por favor intente de nuevo";
    }
  }

  Register()
  {
    if(this.registerForm.valid)
    {
      this.message = null;
      let email = this.registerForm.controls.email.value;
      let password = this.registerForm.controls.password.value;
      let result = this.userService.Register(email, password);
      setTimeout(()=>{}, 3000);
      if(!result)
      {
        this.message = "Hubo un error al registrar, por favor intente de nuevo";
      }
      else
      {
        this.userService.LogIn(email, password);
        this.router.navigate(["/"]);
      }
    }
    else
    {
      console.log("error");
      this.message = "Por favor completa correctamente los campos";
    }
  }

  WantsToLogIn()
  {
    this.wantsToLogIn = true;
    this.message = null;
  }

  WantsToRegister()
  {
    this.message = null;
    this.wantsToLogIn = false;
  }
}
