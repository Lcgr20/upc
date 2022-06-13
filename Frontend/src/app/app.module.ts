import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListBankaccountComponent } from './components/cuentas_bancarias/list-bankaccount/list-bankaccount.component';
import { NewBankaccountComponent } from './components/cuentas_bancarias/new-bankaccount/new-bankaccount.component';
import { EditBankaccountComponent } from './components/cuentas_bancarias/edit-bankaccount/edit-bankaccount.component';
import { TasasDeCambioComponent } from './components/tasas-de-cambio/tasas-de-cambio.component';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './components/layout/layout.component';
import { HistorialOperacionesComponent } from './components/historial-operaciones/historial-operaciones.component';
import { VerBeneficiosComponent } from './components/beneficios/ver-beneficios/ver-beneficios.component';
import { VerBarraDeProgresoComponent } from './components/beneficios/ver-barra-de-progreso/ver-barra-de-progreso.component';
import { CentroAyudaComponent } from './components/centro-ayuda/centro-ayuda.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewProfileComponent,
    LoginComponent,
    RegisterComponent,
    ListBankaccountComponent,
    NewBankaccountComponent,
    EditBankaccountComponent,
    TasasDeCambioComponent,
    LayoutComponent,
    HistorialOperacionesComponent,
    VerBeneficiosComponent,
    VerBarraDeProgresoComponent,
    CentroAyudaComponent,
    NotificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
