import { Injectable } from '@angular/core';
import { stringLength } from '@firebase/util';
import { IUser } from '../models/IUser';
@Injectable({
  providedIn: 'root'
})

export class LocalStorageService
{
  users: IUser[];
  guestUser: IUser;
  currentUser: IUser;
  constructor()
  {
    this.guestUser = {
      email: "guest",
      password: "guest",
      scores: {
        agilidad: 0,
        piedraPapelTijera: 0,
        taTeTi: 0,
        adivinaElNumero: 0,
        dedosRapidos: 0,
        anagrama: 0
      }
    }

    if(localStorage.getItem("users") == null)
      this.users = new Array<IUser>();
    else
      this.users = JSON.parse(localStorage.getItem("users"));

    if(localStorage.getItem("currentUser")==null)
      this.currentUser = this.guestUser;
    else
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  public LogIn(email: string, password: string): boolean
  {
    let success = false;
    this.users.forEach(user=>{
      if(user.email == email && user.password == password)
      {
        this.currentUser = user;
        this._saveCurrentUser();
        success = true;
      }
    });
    return success;
  }

  public Register(email: string, password: string): boolean
  {
    if(this.LogIn(email, password))
    {
      return false;
    }
    
    let newUser: IUser;
    newUser = {email: email, password: password, scores: this.guestUser.scores};

    this.users.push(newUser);
    this._saveAllUsers();
    return true;
  }

  public GetCurrentUser(): IUser
  {
    if(JSON.parse(localStorage.getItem("currentUser")) == null)
    {
      return this.guestUser;
    }
    else
    {
      return JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  public UpdateUserScore(game: string, score: number)
  {
    switch(game)
    {
      case 'agilidad':
        this.currentUser.scores.agilidad += score;
        break;

      case 'anagrama':
        this.currentUser.scores.anagrama += score;
        break;

        case 'piedraPapelTijera':
        this.currentUser.scores.piedraPapelTijera += score;
        break;

        case 'taTeTi':
        this.currentUser.scores.taTeTi += score;
        break;

        case 'adivinaElNumero':
        this.currentUser.scores.adivinaElNumero += score;
        break;

        case 'dedosRapidos':
        this.currentUser.scores.dedosRapidos += score;
        break;
    }

    this._saveCurrentUser();
    let thatUser = this.currentUser;
    this.users.forEach(user=>{
      if(user.email == thatUser.email)
      {
        user.scores = thatUser.scores;
      }
    });
    this._saveAllUsers();
  }

  public GetScores() : {
    user: string,
    scores: {
      agilidad: number,
      piedraPapelTijera: number,
      taTeTi: number,
      adivinaElNumero: number,
      dedosRapidos: number,
      anagrama: number
    }
  }[]
  {
    let scores = [];
    this.users.forEach(user=>{
      scores.push({user: user.email, scores: user.scores});
    }) ;
    return scores;
  }


  private _saveCurrentUser()
  {
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
  }

  private _saveAllUsers()
  {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

}