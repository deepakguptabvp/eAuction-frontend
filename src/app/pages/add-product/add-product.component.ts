import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductService } from 'src/app/services/product.service';

class Product {
  
  public id!: number;
  public productName!: string;
  public shortDescription!: string;
  public detailedDescription!: string;
  public startingPrice!: number;
  public bidEndDate!: Date;
  public category!: ProductCategory;
}

class ProductCategory {
  public id!: number;
  public category!: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productCategoryList: any = [];

  addProductData!: Product;

  constructor(private snack: MatSnackBar, private productService: ProductService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.addProductData = new Product();
    this.productService.fetchProductCategory().subscribe(
      (data: any) => {
        this.productCategoryList = data;

      }
    )
  }

  saveProduct() {
    console.log("clicked");

    if (this.addProductData.productName.trim() == '' || this.addProductData.productName == null) {
      this.snack.open("Product Name is required", "okay", {
        duration: 2000
      });
    }

    // if (this.addProductData.productCategory.trim() == '' || this.addProductData.productCategory == null) {
    //   this.snack.open("Product Category is required", "okay", {
    //     duration: 2000
    //   });
    // }

    if (this.addProductData.shortDescription.trim() == '' || this.addProductData.shortDescription == null) {
      this.snack.open("Short Description is required", "okay", {
        duration: 2000
      });
    }

    if (this.addProductData.detailedDescription.trim() == '' || this.addProductData.detailedDescription == null) {
      this.snack.open("Detailed Description is required", "okay", {
        duration: 2000
      });
    }

    // if (this.addProductData.startingPrice.trim() == '' || this.addProductData.startingPrice == null) {
    //   this.snack.open("Starting Price is required", "okay", {
    //     duration: 2000
    //   });
    // }

    // if (this.addProductData.bidEndDate.trim() == '' || this.addProductData.bidEndDate == null) {
    //   this.snack.open("Bid End Date is required", "okay", {
    //     duration: 2000
    //   });
    // }

    console.log(this.addProductData);
    console.log(this.addProductData.category);
    this.productService.saveProduct(this.addProductData).subscribe(
      (data: any) => {
        console.log(data);
        this.snack.open("Product Added Successfully", "Okay");
        this.router.navigate(['product-list']);
      },
      (error) => {
        console.log('fail');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', 'okay', {
          duration: 1500,
        });
      });

  }
}


 