import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerBarraDeProgresoComponent } from './components/beneficios/ver-barra-de-progreso/ver-barra-de-progreso.component';
import { VerBeneficiosComponent } from './components/beneficios/ver-beneficios/ver-beneficios.component';
import { CentroAyudaComponent } from './components/centro-ayuda/centro-ayuda.component';
import { EditBankaccountComponent } from './components/cuentas_bancarias/edit-bankaccount/edit-bankaccount.component';
import { ListBankaccountComponent } from './components/cuentas_bancarias/list-bankaccount/list-bankaccount.component';
import { NewBankaccountComponent } from './components/cuentas_bancarias/new-bankaccount/new-bankaccount.component';
import { HistorialOperacionesComponent } from './components/historial-operaciones/historial-operaciones.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { NoPaso1Component } from './components/nueva_operacion/no-paso1/no-paso1.component';
import { NoPaso2Component } from './components/nueva_operacion/no-paso2/no-paso2.component';
import { NoPaso3Component } from './components/nueva_operacion/no-paso3/no-paso3.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
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
    { path:'rec-contra',component:RecuperarContraComponent},
    { path:'BankAccount',component:ListBankaccountComponent},
    { path:'BankAccount/new',component:NewBankaccountComponent},
    { path:'BankAccount/edit/:id',component:EditBankaccountComponent},
    { path:'tasasDeCambio',component:TasasDeCambioComponent},
    { path:'historial',component:HistorialOperacionesComponent},
    { path:'beneficios',component:VerBeneficiosComponent},
    { path:'beneficios/progreso',component:VerBarraDeProgresoComponent},
    { path:'ayuda',component:CentroAyudaComponent},
    { path:'notificacion',component:NotificacionComponent},
    { path:'nueva-operacion/paso1',component:NoPaso1Component},
    { path:'nueva-operacion/paso2',component:NoPaso2Component},
    { path:'nueva-operacion/paso3',component:NoPaso3Component},
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
