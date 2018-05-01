import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssAstronautsComponent } from './iss-astronauts.component';

describe('IssTeamComponent', () => {
  let component: IssAstronautsComponent;
  let fixture: ComponentFixture<IssTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssAstronautsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssAstronautsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
