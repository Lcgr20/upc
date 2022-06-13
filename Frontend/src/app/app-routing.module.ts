import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerBarraDeProgresoComponent } from './components/beneficios/ver-barra-de-progreso/ver-barra-de-progreso.component';
import { VerBeneficiosComponent } from './components/beneficios/ver-beneficios/ver-beneficios.component';
import { CentroAyudaComponent } from './components/centro-ayuda/centro-ayuda.component';
import { ListBankaccountComponent } from './components/cuentas_bancarias/list-bankaccount/list-bankaccount.component';
import { NewBankaccountComponent } from './components/cuentas_bancarias/new-bankaccount/new-bankaccount.component';
import { HistorialOperacionesComponent } from './components/historial-operaciones/historial-operaciones.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { TasasDeCambioComponent } from './components/tasas-de-cambio/tasas-de-cambio.component';

const routes: Routes = [
  { path:'',
  component:LayoutComponent,
  children:[
    { path:'',component:HomeComponent},
    { path:'profile',component:ViewProfileComponent},
    { path:'register',component:RegisterComponent},
    { path:'login',component:LoginComponent},
    { path:'BankAccount',component:ListBankaccountComponent},
    { path:'BankAccount/new',component:NewBankaccountComponent},
    { path:'tasasDeCambio',component:TasasDeCambioComponent},
    { path:'historial',component:HistorialOperacionesComponent},
    { path:'beneficios',component:VerBeneficiosComponent},
    { path:'beneficios/progreso',component:VerBarraDeProgresoComponent},
    { path:'ayuda',component:CentroAyudaComponent},
    { path:'notificacion',component:NotificacionComponent},
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
