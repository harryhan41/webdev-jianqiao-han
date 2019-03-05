import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model.client';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {
  }

  baseUrl = environment.baseUrl;

  // createUser() {
  //   return this._http.get<User>(this.baseUrl + '/api/user/');
  // }
  //
  // findUserById(userId: string) {
  //   return this._http.get<User>(this.baseUrl + '/api/user/' + userId);
  // }

  findUserByCredential(username: string, password: string) {
    return this._http.get<User>(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  // updateUser(user: User) {
  //   return this._http.put<User>(this.baseUrl + '/api/user' + user._id, user);
  // }
  //
  // deleteUserById(userId: string) {
  //   return this._http.delete<User>(this.baseUrl + '/api/user' + userId);
  // }
}

// import {Injectable} from '@angular/core';
// import {User} from '../models/user.model.client';
//
// @Injectable()
// export class UserService {
//   constructor() {
//   }
//
//   users: User[] = [
//     new User('123', 'alice', 'qq', 'alice', 'alice', 'a@a.com'),
//     new User('234', 'bob', 'qq', 'bob', 'bob', 'b@b.com'),
//     new User('345', 'charlie', 'qq', 'charlie', 'charlie', 'c@c.com'),
//   ];
//
//   createUser(user: User) {
//     this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email));
//   }
//
//   findUserById(userId: string) {
//     return this.users.find(user => user._id === userId);
//   }
//
//   findUserByCredential(username: string, password: string) {
//     return this.users.find(user => user.username === username && user.password === password);
//   }
//
//   updateUser(user: User) {
//     for (const i in this.users) {
//       if (this.users[i]._id === user._id) {
//         this.users[i].firstName = user.firstName;
//         this.users[i].lastName = user.lastName;
//         return this.users[i];
//       }
//     }
//   }
//
//   deleteUserById(userId: string) {
//     for (const i in this.users) {
//       if (this.users[i]._id === userId) {
//         const j = +i;
//         this.users.splice(j, 1);
//       }
//     }
//   }
// }
