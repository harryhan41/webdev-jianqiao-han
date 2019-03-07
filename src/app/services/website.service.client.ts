import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  constructor(private _http: HttpClient) {
  }

  baseUrl = environment.baseUrl;

  createWebsite(userId: string, website: Website) {
    return this._http.post<Website>(this.baseUrl + '/api/user/' + userId + '/website', website);
  }


  findWebsitesByUser(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
  }

  findWebsiteById(websiteId: string) {

  }


  updateWebsite(websiteId: string, website: Website) {


  }

  deleteWebsite(websiteId: string) {

  }


}
