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

  @ViewChild('f') registerForm: NgForm;

  username: string;
  password: string;
  vpassword: string;
  user;

  errorFlag = false;
  errorMsg = 'Invalid password!';

  constructor(private userService: UserService, private router: Router) {
  }


  register() {

    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.vpassword = this.registerForm.value.verifypassword;


    if (this.vpassword !== this.password) {
      this.errorFlag = true;
    } else {
      this.userService.register(this.username, this.password)
        .subscribe(
          (user: User) => {
            this.user = user;
            console.log(user);
            console.log('this is the register process running');
            this.router.navigate(['/user', user._id]);
          },
        );
    }
  }

  ngOnInit() {
  }
}
