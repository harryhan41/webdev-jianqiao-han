import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css'],
})
export class WidgetTextComponent implements OnInit {

  flag = false; // setting error flag as false by default
  error: string;
  alert: string;
  websiteId: string;
  userId: string;
  pageId: string;
  widgetId: string;
  widget: Widget;

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  updateWidget() {
    // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
    if (this.widget['name'] === undefined) {
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
    this.error = 'Enter the required field';
    this.alert = '* Enter the required fields';

    // fetch ids from current url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        },
      );

    // fetch widget values as created on widget-new component
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => this.widget = data,
        (error: any) => console.log(error),
      );
  }
}
