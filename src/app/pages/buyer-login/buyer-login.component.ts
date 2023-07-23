import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BuyerLoginService } from 'src/app/services/buyer-login.service';

@Component({
  selector: 'app-buyer-login',
  templateUrl: './buyer-login.component.html',
  styleUrls: ['./buyer-login.component.css']
})
export class BuyerLoginComponent implements OnInit {

  loginData = {
    email: '',
    password: ''
  }

  constructor(private snack: MatSnackBar, private loginService: BuyerLoginService, private router: Router, private auth:AuthenticationService) { }

  ngOnInit(): void {
    
  }

  formSubmit() {
    // console.log('clicked');

    if (this.loginData.email.trim() == '' || this.loginData.email == null) {
      this.snack.open("Email is required", "okay", {
        duration: 2000
      });
    }

    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("Password is required", "okay", {
        duration: 2000
      });
    }

    // buyer-login 
    this.loginService.loginUser(this.loginData.email, this.loginData.password).subscribe(
      (data: any) => {
        this.loginService.loginStatusSubject.next(true);
        this.router.navigate(["/product-list"]);
        alert('Welcome to E-Auction');

        this.auth.setBuyerSession(this.loginData.email);

      },
      (error) => {
        console.log('Fail');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', 'okay', {
          duration: 1500,
        });
      }
      );


  };
}
