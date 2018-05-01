import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssTeamComponent } from './iss-team.component';

describe('IssTeamComponent', () => {
  let component: IssTeamComponent;
  let fixture: ComponentFixture<IssTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
