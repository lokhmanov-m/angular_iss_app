import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IssService {

  private url = 'http://api.open-notify.org/iss-now.json';

  constructor( private http: HttpClient ) { }

  getLocationISS() {
    return this.http.get(this.url);
  }
}
