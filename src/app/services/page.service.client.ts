import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';

@Injectable()
export class PageService {
  constructor() {
  }

  page: Page[] = [
    new Page('123', 'page123', '123', 'test page 123'),
    new Page('456', 'page456', '456', 'test page 456'),
    new Page('789', 'page789', '789', 'test page 789'),
  ];

  createPage(websiteId: string, page: Page) {
    const new_page = {
      _id: Math.random().toString(),
      name: page.name,
      websiteId: page.websiteId,
      title: page.title,
    };
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
