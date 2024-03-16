import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  chgPass1(pass:any){
    pass.type = "text";
  }
  chgPass2(pass:any){
    pass.type = "password";
  }
  chgEmail1(e:any,c:any){
    c.style.display = "none"
    e.target.type = "date";
    let today = new Date();
    e.target.value = today.toISOString().split("T")[0];
  }
  chgEmail2(e:any,c:any){
    c.style.display = "inline-block"
    e.target.type = "text";
    e.target.placeholder = "BirthDate";
    e.target.value = "";
  }
}
