import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
              private flashMessage: FlashMessagesService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){

    const user = {
      userName: this.username,
      password: this.password
    };

    this.authService.authUser(user).subscribe(data => {
      console.log(data)
    })
  }



}
