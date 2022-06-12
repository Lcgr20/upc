import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBankaccountComponent } from './components/cuentas_bancarias/list-bankaccount/list-bankaccount.component';
import { NewBankaccountComponent } from './components/cuentas_bancarias/new-bankaccount/new-bankaccount.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { TasasDeCambioComponent } from './components/tasas-de-cambio/tasas-de-cambio.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'profile',component:ViewProfileComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'BankAccount',component:ListBankaccountComponent},
  { path:'BankAccount/new',component:NewBankaccountComponent},
  { path:'tasasDeCambio',component:TasasDeCambioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
