import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css'],
})
export class WidgetListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgets = [{}];


  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  byPass(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['wid'];
        this.userId = params['uid'];
        this.pageId = params['pid'];
      },
    );
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe(data => {
        console.log('find widgets by page Id');
        this.widgets = data;
      });
  }

}
