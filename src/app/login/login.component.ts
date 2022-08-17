import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/Customer';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username!: string;
  public password!: string;
  errorMsg = "";
  baseUrl = environment.apiBaseUrl;
  public currentUser: Customer = {
    uname: '',
    pword: '',
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(["/register"]);
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMsg = "Invalid Credentials";
      }
    }
  }

}