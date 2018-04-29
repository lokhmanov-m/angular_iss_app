import { Component, OnInit } from '@angular/core';
import { IssService } from '../../services/iss.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dateNow: object;
  public timeNow: string;

  constructor( private issService: IssService ) { }

  ngOnInit() {
    this.issService.getLocationISS().subscribe((data) => {
      console.log(data);
    });

    this.startDate();
  }

  private startDate() {
    setInterval(() => {
      const defaultDate = new Date();
      this.timeNow = defaultDate.toLocaleTimeString('ua', {timeZone: 'UTC', hour: '2-digit', minute: '2-digit'});
      this.dateNow = defaultDate;
    }, 1000);
  }
}

