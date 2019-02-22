import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';

@Injectable()
export class WebsiteService {
  constructor() {
  }

  websites: Website[] = [
    new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Google', '239', 'Lorem'),
    new Website('345', 'Twitter', '123', 'Lorem'),
    new Website('456', 'Tictok', '434', 'Lorem'),
    new Website('567', 'Instagram', '498', 'Lorem'),
  ];

  createWebsite(userId: string, website: Website) {
    const new_website: Website = {
      _id: (new Date()).getTime() + '',
      name: website.name,
      developerId: website.developerId,
      description: website.description
    };

    this.websites.push(new_website);
  }

  findWebsitesByUser(userId: string) {
    for (const i in this.websites) {
      if (this.websites[i].developerId === userId) {
        return this.websites[i];
      }
    }
  }

  findWebsiteById(websiteId: string) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        return this.websites[i];
      }
    }
  }


  updateWebsite(websiteId: string, website: Website) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        return this.websites[i] = website;
      }
    }

  }

  deleteWebsite(websiteId: string) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        this.websites.splice(i, 1);
      }
    }
  }


}
