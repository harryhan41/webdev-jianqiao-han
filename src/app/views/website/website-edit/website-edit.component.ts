import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  websiteId: string;
  website;
  websiteName: string;
  websiteDescription: string;
  developerId: string;

  constructor(private websiteService: WebsiteService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params._id;
      }
    );
    this.website = this.websiteService.findWebsiteById(this.websiteId);
  }

}
