import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';

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

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  login() {
    // fetching data from LoginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password).subscribe((user: any) => {
      console.log('login component ts');
      this.sharedService.user = user;
      this.router.navigate(['/user', user._id]);
    }, (error: any) => {
      console.log(error);
    });
  }
}
