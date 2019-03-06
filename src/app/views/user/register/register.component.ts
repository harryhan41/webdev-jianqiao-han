import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  user;

  constructor(private userService: UserService, private router: Router) {
  }


  register() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    console.log('register compoment file ');

    this.user = {username: username, password: password};

    this.userService.createUser(this.user)
      .subscribe((user: User) => {
        if (user) {
          this.router.navigate(['/user', user._id]);
        }
      });
  }

  ngOnInit() {
  }
}
