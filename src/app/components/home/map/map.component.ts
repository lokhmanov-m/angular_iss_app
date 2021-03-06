import { Component, OnInit, OnDestroy } from '@angular/core';
import { IssService } from '../../../services/iss.service';
import { IssPosition } from '../../../models/iss_position';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  public lat: number;
  public lng: number;
  public zoom: number;
  readonly icon = './../../../../assets/img/iss.png';
  private currentLocation: IssPosition;
  private subscription: Subscription;

  constructor( private issService: IssService ) { }

  ngOnInit() {
    this.subscription = this.issService.getLocationISS().subscribe((data: IssPosition) => {
      this.currentLocation = data.iss_position;
      this.lat = parseFloat(this.currentLocation.latitude);
      this.lng = parseFloat(this.currentLocation.longitude);
    });

    this.zoom = 3;
    this.updateLocation();
  }

  private updateLocation() {
    setInterval(() => {
      this.issService.getLocationISS().subscribe((data: IssPosition) => {
        this.currentLocation = data.iss_position;
        this.lat = parseFloat(this.currentLocation.latitude);
        this.lng = parseFloat(this.currentLocation.longitude);
      });
    }, 5000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
