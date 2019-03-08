import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {

  user_Id: string;
  web_Id: string;
  pages = [{}];

  constructor(private pageService: PageService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.web_Id = params['wid'];
        this.user_Id = params['uid'];
      },
    );

    this.pageService.findPageByWebsiteId(this.web_Id)
      .subscribe(pages => {
        this.pages = pages;
      });

  }

}
