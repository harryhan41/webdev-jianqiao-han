import {Component, OnInit} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pages: Page[];

  constructor(private pageService: PageService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      },
    );

    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe(pages => {
        this.pages = pages;
      });

  }

}
