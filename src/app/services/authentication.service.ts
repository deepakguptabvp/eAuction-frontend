import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  setSellerSession(){
    sessionStorage.setItem("seller","seller");
  }

  checkSellerSession(){
    if(sessionStorage.getItem("seller")!=null){return true;}
    return false;
  }

  setBuyerSession(buyerEmail:any){
    sessionStorage.setItem("buyerEmail",buyerEmail);
  }

  checkBuyerSession(){
    if(sessionStorage.getItem("buyerEmail")!=null){return true;}
    return false;
  }

}
