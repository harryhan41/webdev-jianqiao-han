import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css'],
})
export class PageEditComponent implements OnInit {

  user_id: string;
  page_id: string;
  web_id: string;
  page: Page;
  pages = [{}];

  constructor(private pageService: PageService, private  router: Router, private activeRouter: ActivatedRoute) {
    this.page = new Page(112, 'abc', 283, 'what');
  }

  updatePage() {
    this.pageService.updatePage(this.page._id, this.page).subscribe(page => {
      this.router.navigateByUrl('/user/' + this.user_id + '/website/' + this.web_id + '/page');
    });
  }

  deletePage() {
    this.pageService.deletePage(this.page._id).subscribe(page => {
      this.router.navigateByUrl('/user/' + this.user_id + '/website/' + this.web_id + '/page');
    });
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params: any) => {
        this.user_id = params['uid'];
        this.page_id = params['pid'];
        this.web_id = params['wid'];
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
