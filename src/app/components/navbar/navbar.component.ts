import { Component, OnInit } from '@angular/core';
import { BuyerLoginService } from 'src/app/services/buyer-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

   
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  buyer = null;

  constructor(public buyerlogin: BuyerLoginService) { }

  ngOnInit(): void {
    this.buyerlogin.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.buyerlogin.isLoggedIn();
      this.buyer = this.buyerlogin.getBuyer();
    })
  }

  public logout() {
    this.buyerlogin.logout();
    window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }
}
