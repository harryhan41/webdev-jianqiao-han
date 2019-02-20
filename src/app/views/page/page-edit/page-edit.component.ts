import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  pageId: string;
  page;
  pageName: string;
  websiteId: string;
  description: string;

  constructor(private pageService: PageService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.pageId = params._id;
      }
    );
    this.page = this.pageService.findPageById(this.pageId);
    this.pageName = this.page.name;
  }

}
