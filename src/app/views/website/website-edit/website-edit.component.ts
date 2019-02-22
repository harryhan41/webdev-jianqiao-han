import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css'],
})
export class WebsiteEditComponent implements OnInit {

  website: Website;

  constructor(private websiteService: WebsiteService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(
      (params: any) => {
        this.website._id = params[':wid'];
      },
    );
    this.website = this.websiteService.findWebsiteById(this.website._id);
  }
}
