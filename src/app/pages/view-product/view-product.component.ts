import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productDetails: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productDetails = {}
    const productId = sessionStorage.getItem("productId");
    this.productService.getProduct(productId).subscribe(
      (data: any) => {
        console.log(data)
        this.productDetails = data;
      }, (error) => {
        console.log(error);
      })

  }

}
