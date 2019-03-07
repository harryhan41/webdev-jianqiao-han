import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model.client';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {
  }

  baseUrl = environment.baseUrl;

  createUser(user: any) {
    return this._http.post<User>(this.baseUrl + '/api/user/', user);
  }

  findUserById(userId: string) {
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
}
