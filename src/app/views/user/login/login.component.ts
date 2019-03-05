import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {User} from '../../../models/user.model.client';

// import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: 'Invalid username or password !';

  constructor() {
  }

  // constructor(private userService: UserService, private router: Router) {
  //   this.errorFlag = false;
  // }

  ngOnInit() {
  }

  login() {

    // fetching data from LoginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    console.log(this.username);
    console.log(this.password);

    // const user: User = this.userService.findUserByCredential(this.username, this.password);
    // if (user) {
    //   this.router.navigate(['/user', user._id]);
    // }

    // this.userService.findUserByCredential(this.username, this.password)
    //   .subscribe((user: User) => {
    //     if (user) {
    //       this.router.navigate(['/user', user._id]);
    //     }
    //   });
  }

}
