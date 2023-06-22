import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/services/buyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buyer-register',
  templateUrl: './buyer-register.component.html',
  styleUrls: ['./buyer-register.component.css']
})
export class BuyerRegisterComponent implements OnInit {

  constructor(private snack: MatSnackBar, private buyerService: BuyerService, private router: Router) { }

  public buyer = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    phone: '',
    email: '',
    password: ''
  }

  ngOnInit(): void { }

  formSubmit() {
    console.log(this.buyer);
    if (this.buyer.firstName == '' || this.buyer.firstName == null) {
      // alert('username is required... ');
      this.snack.open("First Name is required", "okay", {
        duration: 1500,
        // verticalPosition:'top',
        // horizontalPosition:'right'
      })
      return;
    }
    if (this.buyer.lastName == '' || this.buyer.lastName == null) {
      // alert('username is required... ');
      this.snack.open("Last Name is required", "okay", {
        duration: 1500,
      })
      return;
    }
    if (this.buyer.address == '' || this.buyer.address == null) {
      // alert('username is required... ');
      this.snack.open("Address is required", "okay", {
        duration: 1500,
      })
      return;
    }
    if (this.buyer.city == '' || this.buyer.city == null) {
      // alert('username is required... ');
      this.snack.open("City is required", "okay", {
        duration: 1500,
      })
      return;
    }
    if (this.buyer.state == '' || this.buyer.state == null) {
      // alert('username is required... ');
      this.snack.open("State is required", "okay", {
        duration: 1500,
      })
      return;
    }
    if (this.buyer.pin == '' || this.buyer.pin == null) {
      // alert('username is required... ');
      this.snack.open("Pin is required", "okay", {
        duration: 1500,
      })
      return;
    }
    if (this.buyer.phone == '' || this.buyer.phone == null) {
      // alert('username is required... ');
      this.snack.open("Phone is required", "okay", {
        duration: 1500,
      })
      return;
    }
    if (this.buyer.email == '' || this.buyer.email == null) {
      // alert('username is required... ');
      this.snack.open("Email is required", "okay", {
        duration: 1500,
      })
      return;
    }
    if (this.buyer.password == '' || this.buyer.password == null) {
      // alert('username is required... ');
      this.snack.open("Password is required", "okay", {
        duration: 1500,
      })
      return;
    }

    // add buyer: BuyerService
    this.buyerService.addBuyer(this.buyer).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Success', 'Buyer is registered successfully with ID: ' + data.id, 'success');
        this.router.navigate(['/buyer-login']);

      },
      (error) => {
        console.log(error);
        this.snack.open('something went wrong', 'okay', {
          duration: 2000
        })
      }
    )

  }
}
