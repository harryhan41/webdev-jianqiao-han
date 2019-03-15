import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css'],
})
export class WidgetYoutubeComponent implements OnInit {

  flag = false; // setting error flag as false by default
  error: string;
  alert: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  userId: string;
  widget = {};

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.widget = new Widget('123', 'Heading', '321');
  }

  updateWidget() {
    this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(widget => {
      this.router.navigateByUrl('/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget');
    });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(widget => {
      this.router.navigateByUrl('/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget');
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.websiteId = params['wid'];
      this.widgetId = params['wgid'];
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(data => {
        console.log('in widget-image-edit comp...');
        console.log(data);
        this.widget = data;
      });
  }
}
