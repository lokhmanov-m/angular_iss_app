import { Component, OnInit, OnDestroy } from '@angular/core';
import { IssService } from '../../services/iss.service';
import { Subscription } from 'rxjs/Subscription';
import { IssPosition } from '../../models/iss_position';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private defaultDate: Date;
  public dateNow: object;
  public timeNow: string;
  readonly logo = './../../../assets/img/logo-iss.png';
  public currentLocation: IssPosition;
  private subscription: Subscription;

  constructor( private issService: IssService ) { }

  ngOnInit() {
    this.subscription = this.issService.getLocationISS()
      .subscribe((data: IssPosition) => { this.currentLocation  = data.iss_position; });

    this.updateLocation();
    this.getDate();
  }

  private updateLocation() {
    setInterval(() => {
      this.issService.getLocationISS()
        .subscribe((data: IssPosition) => { this.currentLocation  = data.iss_position; });
    }, 5000);
  }

  private getDate() {
    setInterval(() => {
      this.defaultDate = new Date();
      this.timeNow = this.defaultDate.toLocaleTimeString('ua', {timeZone: 'UTC', hour: '2-digit', minute: '2-digit'});
      this.dateNow = this.defaultDate;
    }, 1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

