import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  constructor() {
  }

  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

  api = {
    createUser: this.createUser,
    findUserById: this.findUserById,
    findUserByUsername: this.findUserByUsername,
    updateUser: this.updateUser,
    deleteUser: this.deleteUser
  };

  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (const user of this.users) {
      if (user._id === userId) {
        return user;
      }
    }
  }

  findUserByUsername(username: string) {
    for (const user of this.users) {
      if (user.username === username) {
        return user;
      }
    }
  }


  updateUser(userId, user) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        return this.users[i] = user;
      }
    }

  }

  deleteUser(userId) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users.splice(i, 1);
      }
    }
  }


}
