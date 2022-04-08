import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
 
import { Storage } from '@capacitor/storage';
 
 
const TOKEN_KEY = 'my-token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
 
  constructor() { }
 
  isLoggedIn() {
    const accountData = localStorage.getItem('accountData'); 
    console.log(accountData);
    if(!accountData){
      return null;
    }
    else{
      const accountDataTrue= JSON.parse(accountData);
    return accountDataTrue[0]; // check if token is expired
    }
    
  }
 
}