import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  chgPass1(pass:any){
    pass.type = "text";
  }
  chgPass2(pass:any){
    pass.type = "password";
  }
}
