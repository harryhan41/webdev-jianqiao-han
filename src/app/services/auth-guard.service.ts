import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SharedService} from './shared.service';
import {UserService} from './user.service.client';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  // canActivate() {
  //   return this.userService.loggedIn();
  // }

  async f() {
    // return await this.userService.loggedIn().toPromise();
    return await this.userService.loggedIn();
  }

  async canActivate() {
    let auth = false;
    await this.f().then(data => {
      const user = data.toString();
      if (user !== '0') {
        this.sharedService.user = user;
        auth = true;
      } else {
        this.router.navigate(['/login']);
      }
    });
    return auth;
  }
}
