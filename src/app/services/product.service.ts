import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // save product
  saveProduct(product: any) {
    return this.http.post(`${baseUrl}/e-auction/api/v1/seller/add-product`, product);
  }

  // getAllProducts
  getAllProducts() {
    return this.http.get(`${baseUrl}/e-auction/api/v1/all-product`);
  }

  // getProducts-ByID
  getProduct(productId: any) {
    return this.http.get(`${baseUrl}/e-auction/api/v1/seller/show-bids/${productId}`);
  }
      
  // deleteProduct-ByID
  deleteProductById(productId: any) {
    return this.http.delete(`${baseUrl}/e-auction/api/v1/seller/delete/${productId}`);
  }

  // getbids for specific products
  getBidsForSpecificProduct(productId: any) {
    return this.http.get(`${baseUrl}/e-auction/api/v1/bids-for-specific-product/${productId}`);
  }

  //fetchProductCategory 
  fetchProductCategory() {
    return this.http.get(`${baseUrl}/e-auction/api/v1/product-category-type`);
  }

}
