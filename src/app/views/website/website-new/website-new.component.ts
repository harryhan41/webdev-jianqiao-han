import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';
import {WebsiteService} from '../../../services/website.service.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css'],
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') webForm: NgForm;

  userId: string;
  websites: Website[];
  name: string;
  description: string;
  newWebsite;

  constructor(private webService: WebsiteService, private router: Router,
              private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
  }

  create() {
    this.name = this.webForm.value.name;
    this.description = this.webForm.value.description;
    this.newWebsite = {developerId: this.userId, name: this.name, description: this.description};

    this.webService.createWebsite(this.userId, this.newWebsite)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
          this.router.navigateByUrl('/user/' + this.userId + '/website');
        });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = this.sharedService.user._id;

    });
    this.webService.findWebsitesByUser(this.userId)
      .subscribe(websites => {
        this.websites = websites;
      });
  }

}
