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

  constructor(private webService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.website = new Website('1', 'website', '0', 'temp');
  }

  update() {
    this.webService.updateWebsite(this.website._id, this.website).subscribe();
  }

  delete() {
    this.webService.deleteWebsite(this.website._id).subscribe(website => {
      this.router.navigateByUrl('/user/' + this.userId + '/website');
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.website._id = params['wid'];
      console.log('website id: ' + this.website._id);
    });

    this.webService.findWebsitesByUser(this.userId)
      .subscribe(websites => {
        this.websites = websites;
        // console.log('websites: ' + websites);
      });

    this.webService.findWebsiteById(this.website._id)
      .subscribe(website => {
        this.website = website;
        console.log('website: ' + website.name);
        console.log('website: ' + website.description);
      });
  }
}
