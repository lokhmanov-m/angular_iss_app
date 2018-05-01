import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IssPosition } from '../models/iss_position';
import { IssAstronauts } from '../models/iss_astronauts';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IssService {
  private urlLocation = environment.issLocationUrl;
  private urlAstronauts = environment.issAstronautsUrl;

  constructor( private http: HttpClient ) { }

  getLocationISS(): Observable<IssPosition> {
    return this.http.get<IssPosition>(this.urlLocation);
  }

  getAstronauts(): Observable<IssAstronauts> {
    return this.http.get<IssAstronauts>(this.urlAstronauts);
  }
}
