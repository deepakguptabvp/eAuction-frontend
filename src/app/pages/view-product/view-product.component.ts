import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from 'src/app/services/bid.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productDetails: any;
  bidAmount: any;
  product: any;
  bids: any = [];
  getBidIfExists: any;
  bid: any;

  constructor(private productService: ProductService, private router: Router, private bidService: BidService) { }

  ngOnInit(): void {
    const productId = sessionStorage.getItem("productId");
    console.log(productId)
    this.productService.getProduct(productId).subscribe(
      (data: any) => {


        this.product = data;
        console.log(this.productDetails)
      }, (error) => {
        console.log(error);
      })
  }

  addingBid() {
    console.log("dataaaaaaaa")
    console.log("p-" + this.productDetails)
    console.log(this.product)
    this.bid = this.product;
    this.bidService.settingBid(this.bid).subscribe(
      (data: any) => {
        // this.ngOnInit();
        this.getBidsForSpecificProduct();
        this.getBidForSpecificProductSpecificBuyer();
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  getBidsForSpecificProduct() {
    let productId = sessionStorage.getItem("productId");
    this.productService.getBidsForSpecificProduct(productId).subscribe(
      data => {
        console.log(data);
        this.bids = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getBidForSpecificProductSpecificBuyer() {
    let productId = sessionStorage.getItem("productId");
    this.bidService.getBidForSpecificProductSpecificBuyer(productId).subscribe(
      (data: any) => {
        // console.log(data,"--------------");
        this.getBidIfExists = data;
      }
    );
  }


  updateBid() {
    // here getting bid is updating bid amount
    this.bidService.updateBidAmountForSpecificProductSpecificBuyer(this.getBidIfExists).subscribe(
      data => {
        alert("Bid Amount Updated Successfully");
        // this.ngOnInit();
        this.getBidsForSpecificProduct();//Best Thing
      }
    );
  }

  deleteBid(getBidIfExistsid: number) {
    this.bidService.deleteBidById(getBidIfExistsid).subscribe(
      (data: any) => {
        this.getBidsForSpecificProduct();
        this.getBidForSpecificProductSpecificBuyer();
        console.log(data);
      }
    );
  }


}


