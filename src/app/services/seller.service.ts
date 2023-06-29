import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  // add seller
  public addSeller(seller: any) {
    return this.http.post(`${baseUrl}/e-auction/api/v1/seller/login`, seller);
  }
}
