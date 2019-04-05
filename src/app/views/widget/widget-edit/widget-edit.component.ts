import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css'],
})
export class WidgetEditComponent implements OnInit {

  widgetId: string;
  widget = {widgetType: ''};
  header = 'Header';
  youtube = 'YouTube';
  text = 'Text';
  html = 'HTML';
  image = 'Image';

  constructor(private widgetService: WidgetService, private activeRouter: ActivatedRoute) {
    this.widget = new Widget('123', 'HEADING', '321');
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.widgetId = params['wgid'];
      console.log('widget id: ' + this.widgetId);
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(data => {
        console.log('widget-edit comp...');
        this.widget.widgetType = data.widgetType;
        console.log('widget ' + data.widgetType);
        console.log('widget type ' + this.widget.widgetType);
      });
  }
}
