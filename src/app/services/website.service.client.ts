import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  constructor(private _http: HttpClient) {
  }

  baseUrl = environment.baseUrl;

  createWebsite(userId: string, website: any) {
    return this._http.post<Website>(this.baseUrl + '/api/user/' + userId + '/website', website);
  }


  findWebsitesByUser(userId: string) {
    return this._http.get<[Website]>(this.baseUrl + '/api/user/' + userId + '/website');
  }

  findWebsiteById(websiteId: string) {
    return this._http.get<Website>(this.baseUrl + '/api/website' + websiteId);
  }


  updateWebsite(websiteId: string, website: Website) {


  }

  deleteWebsite(websiteId: string) {

  }


}
