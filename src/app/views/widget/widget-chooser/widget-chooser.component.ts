import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css'],
})
export class WidgetChooserComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget = {};

  defaultWidgetValues =
    {
      Header: {widgetType: 'Header', size: 1},
      Image: {widgetType: 'Image', width: '100%'},
      YouTube: {widgetType: 'YouTube', width: '100%'},
      HTML: {widgetType: 'HTML'},
      Text: {widgetType: 'Text', placeholder: ''},
    };


  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  createWidget(widgetType) {

    this.widget = this.defaultWidgetValues[widgetType];

    console.log('input widget type is ' + widgetType);

    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        (data: any) => {
          this.widgetId = data._id;
          console.log('the create widget method is running ' + this.widgetId);
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
        },
      );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
  }

}
