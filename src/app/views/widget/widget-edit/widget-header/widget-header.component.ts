import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css'],
})
export class WidgetHeaderComponent implements OnInit {
  flag = false; // setting error flag as false by default
  error: string;
  alert: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  userId: string;
  widget = {};

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.widget = new Widget('123', 'HEADING', '456');
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

    // initialize error and alert text
    this.error = 'Enter the name of the widget';
    this.alert = '* Enter the widget name';

    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.websiteId = params['wid'];
      this.widgetId = params['wgid'];
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(data => {
        console.log('widget-header-edit comp...');
        this.widget = data;
      });
  }

}
