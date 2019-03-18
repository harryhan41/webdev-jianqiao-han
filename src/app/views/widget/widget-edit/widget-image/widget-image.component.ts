import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css'],
})
export class WidgetImageComponent implements OnInit {

  flag = false;
  widget: Widget;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  baseUrl: string;

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
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

    this.baseUrl = environment.baseUrl;

    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.websiteId = params['wid'];
      this.widgetId = params['wgid'];
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(data => {
        console.log('in widget-header-edit comp...');
        console.log(data);
        this.widget = data;
      });
  }
}
