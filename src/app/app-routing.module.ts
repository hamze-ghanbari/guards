import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import  { AuthGuard } from './auth.guard';
import { ManagepagesComponent } from './managepages/managepages.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { RegisterComponent } from './register/register.component';
import { DeactivateGuard } from './deactivate.guard';
const routes: Routes = [
  {path : '' , component : HomeComponent},
   {path : 'admin' , component : AdminComponent ,  canActivateChild : [ AuthGuard ] , children :[
    {path : 'manageuser', component:ManageuserComponent},
    {path : 'managepages', component : ManagepagesComponent}
  ]},
  {path : 'about' , component : AboutComponent},
  {path : 'register', component : RegisterComponent , canDeactivate : [DeactivateGuard]},
  {path : 'notauthorized' , component : NotauthorizedComponent},
  {path : '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
