import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';

@Injectable()
export class PageService {
  constructor() {
  }

  page = [
    {_id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem'},
    {_id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem'},
    {_id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem'}
  ];

  api = {
    createPage: this.createPage,
    findPageByWebsiteId: this.findPageByWebsiteId,
    findPageById: this.findPageById,
    updatePage: this.updatePage,
    deletePage: this.deletePage,
  };

  createPage(websiteId, page) {
    page._id = Math.random();
    page.websiteId = websiteId;
    this.page.push(page);
    return page;
  }

  findPageByWebsiteId(websiteId: string) {
    for (const page of this.page) {
      if (page.websiteId === websiteId) {
        return page;
      }
    }
  }

  findPageById(pageId: string) {
    for (const page of this.page) {
      if (page._id === pageId) {
        return page;
      }
    }
  }


  updatePage(pageId, page) {
    for (let i = 0; i < this.page.length; i++) {
      if (this.page[i]._id === pageId) {
        return this.page[i] = page;
      }
    }

  }

  deletePage(pageId) {
    for (let i = 0; i < this.page.length; i++) {
      if (this.page[i]._id === pageId) {
        this.page.splice(i, 1);
      }
    }
  }


}
