import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';

@Injectable()
export class WidgetService {
  constructor() {
  }

  widgets: Widget[] = [
    new Widget('123', 'HEADER', '321', '2', 'GIZMODO', null, null),
    new Widget('123', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('123', 'HTML', '321', '2', '<p>blalbla</p>', null, null),
    new Widget('123', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token'),
  ];

  createWidget(pageId: string, widget: Widget) {
    widget._id = Math.random().toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: string) {
    for (const widget of this.widgets) {
      if (widget.pageId === pageId) {
        return widget;
      }
    }
  }

  findWidgetById(widgetId: string) {
    for (const widget of this.widgets) {
      if (widget._id === widgetId) {
        return widget;
      }
    }
  }

  updateWidget(widgetId, widget) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        return this.widgets[i] = widget;
      }
    }
  }

  deleteWidget(widgetId) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        this.widgets.splice(i, 1);
      }
    }
  }


}
