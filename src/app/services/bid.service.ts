import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient) { }

  settingBid(bid: any) {
    let hd = new HttpHeaders(
      { "buyerEmail": sessionStorage.getItem("buyer")  ?? "" }
    );
    return this.http.post(`http://localhost:8080/e-auction/api/v1/buyer/place-bid`, bid, { headers: hd });
  }


  getBidForSpecificProductSpecificBuyer(productId:any ) {
    let hd = new HttpHeaders(
      { "buyerEmail": sessionStorage.getItem("buyer")  ?? ""}
    );
    return this.http.get(`http://localhost:8080/e-auction/api/v1/buyer/get-bid-for-specific-product-specific-buyer/${productId}`, { headers: hd });
  }


  updateBidAmountForSpecificProductSpecificBuyer(bid: any) {
    return this.http.put(`http://localhost:8080/e-auction/api/v1/buyer/update-bid`, bid);
  }


  deleteBidById(bidId: number) {
    return this.http.delete(`http://localhost:8080/e-auction/api/v1/buyer/delete-bid/${bidId}`);
  }

}
