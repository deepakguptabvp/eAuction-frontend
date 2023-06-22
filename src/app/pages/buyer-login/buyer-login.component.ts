import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  errorMessage: any
  constructor(private snack: MatSnackBar, private loginService: BuyerLoginService, private router: Router) { }

  ngOnInit(): void {}

  formSubmit() {
    console.log('clicked')

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
        console.log(data);
        this.snack.open("Welcome To E-Auction", "Okay");
        this.loginService.loginStatusSubject.next(true);
        this.router.navigate(["/product-list"])

        // if(this.loginService.getBuyer() == this.loginService.isLoggedIn){
        //   console.log('User is already logged in')
        // } else {
        //   this.loginService.logout();
        //   this.router.navigate(['/buyer-login']);
        // }

      },
      // error=> {this.errorMessage= error.errorMessage})
      (error) => {
        console.log('Fail');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', 'okay', {
          duration: 1500,
        });
      });


  };
}
