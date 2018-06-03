import { LoginService } from './../service/login.service';
import { User } from './../models/user';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User;
  constructor(private router:Router,
              private loginService:LoginService) { }

  ngOnInit() {
    this.user=new User();
  }


  loginUser(): void {
    console.log(this.user.userName);
    console.log(this.user.password);
     this.loginService.login(this.user);
    // if(this.user.userName =='admin' && this.user.password =='admin'){
    //   this.router.navigate(['list']);
    // }
    
	}
}
