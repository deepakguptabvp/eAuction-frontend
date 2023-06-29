import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

class Seller {
  constructor(public email:string, public password:string) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class SellerLoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  public loginSeller(email: any, password: any) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    let seller = new Seller(email, password);

    return this.http.post(`${baseUrl}/e-auction/api/v1/seller/login`, seller);
  }

  // is loggedin : seller is logged in or not
  public isLoggedIn() {
    let log = localStorage.getItem('email');
    if (log == undefined || log == '' || log=="null"){
      return false;
    } else { 
      return true;
    }
  }

  // set SellerDetails
  public setSeller(seller: any){
    localStorage.setItem('seller', JSON.stringify(seller));
    console.log(seller);
  }

  // get SellerDetails
  public getSeller(){
    let sellerStr = localStorage.getItem('seller');
    if(sellerStr != null){
      return JSON.parse(sellerStr);
    } else {
      this.logout();
      return null;
    }
  }

  // seller logout 
  public logout(){
    localStorage.removeItem('seller');
    return true;
  }

}
