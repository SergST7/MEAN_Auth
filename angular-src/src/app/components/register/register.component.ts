import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";

import { FlashMessagesService } from 'angular2-flash-messages'

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
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      name: this.name,
      userName: this.username,
      email: this.email,
      password: this.password,
    }


    if (!this.validateSrv.validateField(user)) {
      this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 2000 });
      return false
    }

    if (!this.validateSrv.validateEmail(user.email)) {
      this.flashMessage.show("Please provide correct email", { cssClass: 'alert-danger', timeout: 2000 });
      return false
    }
  }
}

