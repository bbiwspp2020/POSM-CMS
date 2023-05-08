import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatabaseComponent } from './pages/database/database.component';
import { AddMerchantComponent } from './pages/add-merchant/add-merchant.component';

const routes: Routes = [
  { path: '',component:LoginComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'database',component:DatabaseComponent},
  { path:'add-merchant',component:AddMerchantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
