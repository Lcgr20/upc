import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfUserComponent } from './components/user/inf-user/inf-user.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'user',component:InfUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
