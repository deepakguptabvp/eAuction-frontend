import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SellerLoginService } from 'src/app/services/seller-login.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css'],
})
export class SellerLoginComponent implements OnInit {

  sellerLoginData = {
    email: "",
    password: ""
  }

  constructor(private snack: MatSnackBar, private loginService: SellerLoginService, private router: Router) { }

  ngOnInit(): void { }

  formSubmit() {
    console.log('clicked');

    if (this.sellerLoginData.email.trim() == '' || this.sellerLoginData.email == null) {
      this.snack.open("Email is required", "okay", {
        duration: 2000
      });
    }

    if (this.sellerLoginData.password.trim() == '' || this.sellerLoginData.password == null) {
      this.snack.open("Password is required", "okay", {
        duration: 2000
      });
    }

    this.loginService.loginSeller(this.sellerLoginData.email, this.sellerLoginData.password).subscribe(
      (data: any) => {
        console.log(data);
        // this.snack.open("Welcome To E-Auction", "Okay");
        this.loginService.loginStatusSubject.next(true);
        this.router.navigate(["/add-product"]);
        alert('Welcome to E-Auction');
      },
      (error) => {
        console.log('Fail');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', 'okay', {
          duration: 1500,
        });
      }
    )
  };

}
