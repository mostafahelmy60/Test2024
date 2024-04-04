import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private MyHttp:HttpClient) {}
  DB_URL = "https://test2024-ssxm.onrender.com/api";
  Register(user:any){
    return this.MyHttp.post(this.DB_URL+"/signup", user);
  }
  Login(user:any){
    return this.MyHttp.post(this.DB_URL+"/login", user);
  }
}
