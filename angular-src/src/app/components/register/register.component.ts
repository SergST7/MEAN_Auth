import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import { FlashMessagesService } from 'angular2-flash-messages'
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateSrv: ValidateService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      name: this.name,
      userName: this.username,
      email: this.email,
      password: this.password,
    }


  //validate
    if (!this.validateSrv.validateField(user)) {
      this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 2000 });
      return false
    }

    if (!this.validateSrv.validateEmail(user.email)) {
      this.flashMessage.show("Please provide correct email", { cssClass: 'alert-danger', timeout: 2000 });
      return false
    }

    //register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show("Registration is success. You can login now", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 2000 });
        this.router.navigate(['/register'])
      }
    })

  }
}

