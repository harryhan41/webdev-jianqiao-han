import {Component, OnInit, ViewChild} from '@angular/core';
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
  websites = [{}];

  constructor(private webService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  create() {
    const name = this.webForm.value.name;
    const description = this.webForm.value.description;
    const website = {name: name, description: description};

    this.webService.createWebsite(this.userId, website)
      .subscribe(site => {
        this.router.navigateByUrl('/user/' + this.userId + '/website');
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];

    });
    this.webService.findWebsitesByUser(this.userId)
      .subscribe(websites => {
        this.websites = websites;
      });
  }

}
