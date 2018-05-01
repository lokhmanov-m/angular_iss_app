import { Component, OnInit } from '@angular/core';
import { IssService } from '../../../services/iss.service';
import { IssAstronauts } from '../../../models/iss_astronauts';

@Component({
  selector: 'app-iss-astronauts',
  templateUrl: './iss-astronauts.component.html',
  styleUrls: ['./iss-astronauts.component.scss']
})
export class IssAstronautsComponent implements OnInit {

  public astronauts: IssAstronauts;

  public members: number;

  constructor( private issService: IssService ) { }

  ngOnInit() {
    this.issService.getAstronauts().subscribe((data: IssAstronauts) => {
        this.members = data.number;
        this.astronauts = data.people;
      });
  }
}
