import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http: HttpClient) { }

  // add buyer
  public addBuyer(buyer: any) {
    return this.http.post(`${baseUrl}/e-auction/api/v1/buyer/register`, buyer);
  }
}
