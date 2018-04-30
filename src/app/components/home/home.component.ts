import { Component, OnInit } from '@angular/core';
import { IssService } from '../../services/iss.service';
import { Subscription } from 'rxjs/Subscription';
import { IssPosition } from '../../models/iss_position';
import { Location } from '../../models/location';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private defaultDate: Date;
  public dateNow: object;
  public timeNow: string;
  readonly logo = './../../../assets/img/logo-iss.png';
  public currentLocation: any;
  // private subscription: any;

  constructor( private issService: IssService ) { }

  ngOnInit() {
    this.issService.getLocationISS().subscribe((data) => {
      this.currentLocation = data;
      console.log(this.currentLocation);
    });

    this.updateLocation();
    this.getDate();
  }

  private updateLocation() {
    setInterval(() => {
      this.issService.getLocationISS().subscribe((data) => {
        this.currentLocation = data;
        console.log(this.currentLocation);
      });
    }, 5000);
  }

  private getDate() {
    setInterval(() => {
      this.defaultDate = new Date();
      this.timeNow = this.defaultDate.toLocaleTimeString('ua', {timeZone: 'UTC', hour: '2-digit', minute: '2-digit'});
      this.dateNow = this.defaultDate;
    }, 1000);
  }
}

