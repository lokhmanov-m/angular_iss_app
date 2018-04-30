import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IssPosition } from '../models/iss_position';
import { Location } from '../models/location';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IssService {
  private url = environment.issLocationUrl;

  constructor( private http: HttpClient ) { }

  getLocationISS() {
    return this.http.get(this.url);
  }
}
