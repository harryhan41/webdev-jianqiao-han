import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';


@Injectable()
export class UserService {
  constructor(private _http: HttpClient, private sharedService: SharedService, private router: Router) {
  }

  baseUrl = environment.baseUrl;

  createUser(user: any) {
    return this._http.post<User>(this.baseUrl + '/api/user/', user);
  }

  findUserById(userId: string) {
    console.log('user.service.client.ts ' + userId);
    return this._http.get<User>(this.baseUrl + '/api/user/' + userId);
  }

  findUserByCredential(username: string, password: string) {
    console.log('this is running');
    return this._http.get<User>(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  updateUser(user: User) {
    return this._http.put<User>(this.baseUrl + '/api/user/' + user._id, user);
  }

  deleteUserById(userId: string) {
    return this._http.delete<User>(this.baseUrl + '/api/user/' + userId);
  }

  login(username: string, password: string) {
    const body = {username: username, password: password};

    return this._http.post(this.baseUrl + '/api/login', body);
  }

  logout() {
    return this._http.post(this.baseUrl + '/api/logout', '');
  }

  register(username: string, password: string) {
    const user = {username: username, password: password};
    return this._http.post(this.baseUrl + '/api/register', user);
  }

  loggedIn() {
    return this._http.post(this.baseUrl + '/api/loggedin', '')
      .subscribe((res) => {
        const user = res.toString();
        if (user !== '0') {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }
}
