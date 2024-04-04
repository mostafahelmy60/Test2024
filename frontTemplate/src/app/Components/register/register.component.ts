import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[UsersService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userServ: UsersService, private router:Router, private activeRouter: ActivatedRoute){}

  regForm = new FormGroup(
    {
      name: new FormControl("",[Validators.required, Validators.minLength(3)]),
      birthdate: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required]),
      confirmpassword: new FormControl("",[Validators.required])
      //image: new FormControl(),
    },
    {
      validators: this.passwordMatch
    }
  )

  passwordMatch(contrlo: AbstractControl){
    return contrlo.value.password  === contrlo.value.confirmpassword
           ?
           null: {mismatch:true}
  }

  get passmatchgetter(){
    return this.regForm?.errors?.['mismatch'] && this.regForm?.touched;
  }


  SubmitForm(){
    if(this.regForm.valid){
      this.userServ.Register(this.regForm.value).subscribe({
        complete:()=>{
          this.router.navigate(["../main"],{relativeTo:this.activeRouter})
        }
      });
    }else{
      alert("Invalid Data")
    }
  }

  chgPass1(pass:any){
    pass.type = "text";
  }
  chgPass2(pass:any){
    pass.type = "password";
  }
  chgBirth1(e:any,c:any){
    c.style.display = "none"
    e.target.type = "date";
    let today = new Date();
    e.target.value = today.toISOString().split("T")[0];
  }
  chgBirth2(e:any,c:any){
    c.style.display = "inline-block"
    e.target.type = "text";
    e.target.placeholder = "BirthDate";
    e.target.value = "";
  }
}
