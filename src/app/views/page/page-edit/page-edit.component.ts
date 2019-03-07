import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css'],
})
export class PageEditComponent implements OnInit {

  page_id: string;
  web_id: string;
  page: Page;
  pages = [{}];

  constructor(private pageService: PageService, private activeRouter: ActivatedRoute) {
    this.page = new Page(112, 'abc', 283, 'what');
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params: any) => {
        this.page_id = params[':pid'];
        this.web_id = params[':wid'];
        console.log('page id: ' + this.page._id);
      },
    );
    this.pageService.findPageById(this.page_id)
      .subscribe(page => {
        this.page = page;
      });

    this.pageService.findPageByWebsiteId(this.web_id)
      .subscribe(pages => {
        this.pages = pages;
      });
  }
}
