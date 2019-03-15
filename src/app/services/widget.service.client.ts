import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {
  constructor(private _http: HttpClient) {
  }

  baseUrl = environment.baseUrl;

  createWidget(pageId: string, widget: any) {
    return this._http.post<Widget>(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
  }

  findWidgetsByPageId(pageId: string) {
    return this._http.get<[Widget]>(this.baseUrl + '/api/page/' + pageId + '/widget');
  }

  findWidgetById(widgetId: string) {
    return this._http.get<Widget>(this.baseUrl + '/api/widget/' + widgetId);
  }

  updateWidget(widgetId, widget) {
    return this._http.put<Widget>(this.baseUrl + '/api/widget/' + widgetId, widget);
  }

  deleteWidget(widgetId) {
    return this._http.delete<Widget>(this.baseUrl + '/api/widget/' + widgetId);
  }


}
