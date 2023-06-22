import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

class Buyer {
  constructor(public email:string, public password:string) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class BuyerLoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  public loginUser(email: any, password: any) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    let buyer = new Buyer(email, password);

    return this.http.post(`${baseUrl}/e-auction/api/v1/buyer/login`, buyer);
  }

  // isLoggedIn: buyer is logged in or not.
  public isLoggedIn() {
    let log = localStorage.getItem('email');
    if (log == undefined || log == '' || log == null) {
      return false;
    } else {
      return true;
    }
  }

  //  Set Buyer Details
  public setBuyer(buyer: any) {
    localStorage.setItem('buyer', JSON.stringify(buyer));
    console.log(buyer);
  }

  // get buyer details
  public getBuyer() {
    let buyerStr = localStorage.getItem('buyer');
    if (buyerStr != null) {
      return JSON.parse(buyerStr);
    }
    else {
      this.logout();
      return null;
    }
  }

  // logout (remove data from local storage)
  public logout() {
    localStorage.removeItem('buyer');
    // localStorage.removeItem('currentBuyer');
    return true;
  }
}
