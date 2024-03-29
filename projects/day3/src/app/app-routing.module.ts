import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home.component";
import {UsersComponent} from "./users/users.component";


const routes: Routes = [
  { path : '' , redirectTo : 'home' , pathMatch : 'full'},
  { path : 'home' , component : HomeComponent },
  { path : 'users', component : UsersComponent },
  { path : '**' , redirectTo : 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
