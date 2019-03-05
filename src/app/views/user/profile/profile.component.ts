import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  // properties
  user: User;

  constructor(private userService: UserService, private router: ActivatedRoute) {
    this.user = new User('111', 'alice', 'qq', 'alice', 'alice', 'alice@alice');
  }

  UpdateUser() {
    // console.log(this.user.username);
    // console.log(this.user.firstName);
    // console.log(this.user.lastName);
    //
    // this.userService.updateUser(this.user);
  }

  ngOnInit() {
    // this.router.params.subscribe(
    //   (params: any) => {
    //     this.userService.findUserById(params['userId']).subscribe((user: User) => {
    //       this.user = user;
    //     });
    //     console.log('user id: ' + this.user._id);
    //   },
    // );
  }
}
