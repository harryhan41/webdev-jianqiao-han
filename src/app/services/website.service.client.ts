import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
// import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class WebsiteService {
  constructor() {
  }

  website = [
    {_id: '123', name: 'Facebook', developerId: '456', description: 'Lorem'},
    {_id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem'},
    {_id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem'},
    {_id: '890', name: 'Go', developerId: '123', description: 'Lorem'},
    {_id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem'},
    {_id: '678', name: 'Checkers', developerId: '123', description: 'Lorem'},
    {_id: '789', name: 'Chess', developerId: '234', description: 'Lorem'}
  ];

  api = {
    createWebsite: this.createWebsite,
    findWebsitesByUser: this.findWebsitesByUser,
    findWebsiteById: this.findWebsiteById,
    updateWebsite: this.updateWebsite,
    deleteWebsite: this.deleteWebsite
  };

  createWebsite(userId, website) {
    website._id = Math.random();
    website.developerId = userId;
    this.website.push(website);
    return website;
  }

  findWebsitesByUser(userId: string) {
    for (let i = 0; i < this.website.length; i++) {
      if (this.website[i].developerId === userId) {
        return this.website[i];
      }
    }
  }

  findWebsiteById(websiteId: string) {
    for (let i = 0; i < this.website.length; i++) {
      if (this.website[i]._id === websiteId) {
        return this.website[i];
      }
    }
  }


  updateWebsite(websiteId, website) {
    for (let i = 0; i < this.website.length; i++) {
      if (this.website[i]._id === websiteId) {
        return this.website[i] = website;
      }
    }

  }

  deleteWebsite(websiteId) {
    for (let i = 0; i < this.website.length; i++) {
      if (this.website[i]._id === websiteId) {
        this.website.splice(i, 1);
      }
    }
  }


}
