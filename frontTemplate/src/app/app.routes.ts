import { Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ErrorComponent } from './Components/error/error.component';

export const routes: Routes = [
  {path:"",redirectTo:"/main",pathMatch:'full'},
  {path:"main",component:MainComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:RegisterComponent},
  {path:"**",component:ErrorComponent},
];
