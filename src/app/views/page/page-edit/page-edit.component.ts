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

  page: Page;

  constructor(private pageService: PageService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(
      (params: any) => {
        this.page._id = params[':pid'];
        console.log('page id: ' + this.page._id);
      },
    );
    this.page = this.pageService.findPageById(this.page._id);
  }

}
