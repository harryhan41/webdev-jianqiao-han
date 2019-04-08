import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  // properties
  user: User;
  updateMsg = 'update your information!';

  constructor(private userService: UserService, private acRouter: ActivatedRoute, private router: Router, private shared: SharedService) {
    this.user = new User('', '', '', '', '', '');
  }


  UpdateUser() {
    this.userService.updateUser(this.user)
      .subscribe(
        (user: User) => {
          this.user = user;
          alert(this.updateMsg);
        },
      );
  }

  ngOnInit() {
    this.acRouter.params.subscribe(params => {
      this.user._id = params['uid'];
      console.log('user id: ' + this.user._id);
    });

    this.userService.findUserById(this.user._id.toString())
      .subscribe(data => {
        console.log('profile component ' + this.user._id.toString());
        console.log(data);
        this.user = data;
      });
  }

  logout() {
    this.userService.logout().subscribe((data: any) => this.router.navigate(['/login']));
  }

  DeleteUser() {
    console.log('delete user');
    this.acRouter.params
      .subscribe(params => {
        return this.userService.deleteUser(this.user._id)
          .subscribe((res: any) => {
            console.log('delete user' + this.user._id);
            this.shared.user = null;
          });
      });
  }

}
