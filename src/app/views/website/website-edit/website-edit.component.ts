import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css'],
})
export class WebsiteEditComponent implements OnInit {

  website: Website;
  userId: string;
  websites = [{}];
  websiteId: string;

  constructor(private webService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  update() {
    this.webService.updateWebsite(this.website._id, this.website).subscribe(website => {
      this.router.navigateByUrl('/user/' + this.userId + '/website');
    });
  }

  delete() {
    this.webService.deleteWebsite(this.website._id).subscribe(website => {
      this.router.navigateByUrl('/user/' + this.userId + '/website');
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      console.log('website id: ' + this.websiteId);
    });

    this.webService.findWebsitesByUser(this.userId)
      .subscribe(websites => {
        this.websites = websites;
        // console.log('websites: ' + websites);
      });

    this.webService.findWebsiteById(this.websiteId)
      .subscribe(website => {
        this.website = website;
        console.log('website: ' + this.website.name);
        console.log('website: ' + this.website.description);
      });
  }
}
