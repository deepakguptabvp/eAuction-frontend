import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductArray: any = [];

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        // console.log(data);
        this.ProductArray = data;
      }  
    )
  }

  addProduct() {
    this.router.navigate(['add-product']);
  }

  viewProduct(productId: string) {
    // console.log(productId)
    sessionStorage.setItem("productId", productId);
    this.router.navigate(["view-product"]);
  }

  deleteProduct(productId: any) {
    this.productService.deleteProductById(productId).subscribe(
      (data: any) => {
        this.ProductArray();
      },
      (error) => {
        console.log(error);
      });
  }
}
