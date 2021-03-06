import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css'],
})
export class WidgetHtmlComponent implements OnInit {

  widgetNew = {name: '', text: ''};
  error: string;
  alert: string;
  flag = false;
  widget: Widget;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  baseUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
  }

  updateWidget() {
    // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
    if (this.widget['name'] === '') {
      this.flag = true;
    } else {
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe(
          (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
          (error: any) => console.log(error),
        );
    }
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

    // fetch ids from current url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        },
      );

    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => {
          this.widget = data;
          this.widget = {...this.widgetNew, ...this.widget};
          console.log(this.widget);
        },
        (error: any) => console.log(error),
      );
  }
}
