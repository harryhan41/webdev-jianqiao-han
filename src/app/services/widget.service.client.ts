import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
// import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class WidgetService {
  constructor() {
  }

  widgets = [
    {_id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
    {_id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {
      _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
      url: 'http://lorempixel.com/400/200/'
    },
    {_id: '456', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'},
    {_id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {
      _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://youtu.be/AM2Ivdi9c4E'
    },
    {_id: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'}
  ];

  api = {
    createWidget: this.createWidget,
    findWidgetsByPageId: this.findWidgetsByPageId,
    findWidgetById: this.findWidgetById,
    updateWidget: this.updateWidget,
    deleteWidget: this.deleteWidget
  };

  createWidget(pageId, widget) {
    widget._id = Math.random();
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
