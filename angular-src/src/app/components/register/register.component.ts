import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";

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

  constructor(private validateSrv: ValidateService) { }

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
      console.log("Please fill in all fields");
      return false
    }

    if (!this.validateSrv.validateEmail(user.email)) {
      console.log("Please provide correct email");
      return false
    }
  }
}

