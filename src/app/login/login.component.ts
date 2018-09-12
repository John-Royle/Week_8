import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ='';
  password:string ='';
  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    if (typeof(Storage) !== "undefined") {
    //   sessionStorage.setItem("lastname", "Smith");
    //   console.log(sessionStorage.getItem("lastname"));

      sessionStorage.setItem("id", "1");
      sessionStorage.setItem("username", "Smith");
      sessionStorage.setItem("birthDate", "14/02/80");
      sessionStorage.setItem("age", "34");

      console.log(sessionStorage.getItem("id"));
      console.log(sessionStorage.getItem("username"));
      console.log(sessionStorage.getItem("birthDate"));
      console.log(sessionStorage.getItem("age"));
    } else {
      console.log("no web storage support");
      // alert comment - no web storage support
    }

    if (this.username == "u" && (this.password == "p")) {
      this.router.navigateByUrl('/chat');
    } else if (this.username == "p" && (this.password == "u")) {

    sessionStorage.setItem("id", "2");
    sessionStorage.setItem("username", "Brown");
    this.router.navigateByUrl('/chat');

     } else {
      alert("Username and Password were incorrect");
    }

  }
}
