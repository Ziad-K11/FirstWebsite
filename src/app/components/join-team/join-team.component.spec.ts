import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTeamComponent } from './join-team.component';

describe('JoinTeamComponent', () => {
  let component: JoinTeamComponent;
  let fixture: ComponentFixture<JoinTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
