import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model.client';
import {SharedService} from './shared.service';
import 'rxjs-compat/add/operator/map';


@Injectable()
export class UserService {
  constructor(private _http: HttpClient, private sharedService: SharedService, private router: Router) {
  }

  baseUrl = environment.baseUrl;


  findUserById(userId: string) {
    return this._http.get<User>(this.baseUrl + '/api/user/' + userId);
  }

  updateUser(user: User) {
    return this._http.put<User>(this.baseUrl + '/api/user/' + user._id, user);
  }

  deleteUser(userId: string) {
    return this._http.delete<User>(this.baseUrl + '/api/user/' + userId);
  }

  login(username: string, password: string) {
    const body = {username: username, password: password};

    return this._http.post(this.baseUrl + '/api/login', body, {withCredentials: true});
  }

  logout() {
    return this._http.post(this.baseUrl + '/api/logout', '', {withCredentials: true});
  }

  register(username: string, password: string) {
    const user = {username: username, password: password};
    return this._http.post(this.baseUrl + '/api/register', user, {withCredentials: true});
  }

  // loggedIn() {
  //   return this._http.get(this.baseUrl + '/api/loggedin', {withCredentials: true});
  // }

  loggedIn() {
    return this._http.post(this.baseUrl + '/api/loggedin', '', {withCredentials: true})
      .map((res: any) => {
        console.log('in user.service.client.ts');
        // console.log(res.json());
        if (!!res && res !== 0) {
          this.sharedService.user = res;
          console.log('in user client server loggedin class as true');
          return true;
        } else {
          this.router.navigate(['/login']);
          console.log('in user client server loggedin class as false');
          return false;
        }
      });
  }
}
