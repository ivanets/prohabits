import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AuthService} from './auth/auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

  private api_url: string = 'http://0.0.0.0:3000/';

  constructor(
    public http: Http,
    public auth: AuthService
  ) {
  }
  private encodeQueryData(data) {
    let ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
  }

  get(path: string, query?: any): any {
    let q = "";
    if(query){
      q = "?" + this.encodeQueryData(query);
    }
    return new Promise(resolve => {
      this.http.get(this.api_url + path + q)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  post(path: string, data?: any): any {
    return new Promise(resolve => {
      this.http.post(this.api_url + path, data)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getPrivate(path: string, query?: any): any {
    if(!query){
      query = {};
    }
    return this.auth.init()
      .then(() => {
        return this.auth.profile;
      })
      .then((profile) => {
        query.sub = profile.sub;
        return this.get(path, query);
      });
  }


  postPrivate(path: string, data?: any): any{
    if(!data){
      data = {};
    }
    return this.auth.init()
      .then(() => {
        return this.auth.profile;
      })
      .then((profile) => {
        data.profile = profile;
        return this.post(path, data);
      });
  }
}
