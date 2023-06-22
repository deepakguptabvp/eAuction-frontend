import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerLoginComponent } from './pages/buyer-login/buyer-login.component';
import { HomeComponent } from './pages/home/home.component';
import { BuyerRegisterComponent } from './pages/buyer-register/buyer-register.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    pathMatch: 'full',
  },
  {
    path : 'seller-login',
    component: SellerLoginComponent,
    pathMatch: 'full',
  },
  {
    path : 'buyer-login',
    component: BuyerLoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'buyer-register',
    component: BuyerRegisterComponent, 
    pathMatch: 'full',
  },
   {
    path: 'product-list',
    component: ProductListComponent, 
    pathMatch: 'full',
  },
  {
    path: 'add-product',
    component: AddProductComponent, 
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
