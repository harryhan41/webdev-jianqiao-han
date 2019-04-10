import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/internal/Subject';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css'],
})
export class WebsiteEditComponent implements OnInit {

  website: Website;
  userId: string;
  websites: Website[];
  websiteId: string;
  websiteChanged = new Subject<string>();
  updateMsg = 'Update web information!';

  constructor(private webService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
    this.website = new Website('1', '2', '3', '4');
  }

  delete() {
    this.webService.deleteWebsite(this.websiteId)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
    this.update();
  }

  update() {
    this.webService.updateWebsite(this.websiteId, this.website)
      .subscribe(
        (website: Website) => {
          this.website = website;
          alert(this.updateMsg);
          this.router.navigateByUrl('/user/' + this.userId + '/website');
        }
      );
  }

  onChangeWebsite(id) {
    this.websiteChanged.next(id);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('ngoninit is running');
      console.log(this.sharedService.user);
      this.userId = this.sharedService.user._id;
      this.websiteId = params['wid'];
    });

    this.webService.findWebsitesByUser(this.userId)
      .subscribe(websites => {
        console.log('find website by user is running');
        this.websites = websites;
      });

    this.webService.findWebsiteById(this.websiteId)
      .subscribe(website => {
        this.website = website;
        console.log('find website by id is running ');
      });
    this.websiteChanged
      .subscribe(
        (websiteId: string) => {
          this.websiteId = websiteId;
          this.webService.findWebsiteById(this.websiteId)
            .subscribe(
              (website: Website) => {
                this.website = website;
              }
            );
        }
      );
  }
}
