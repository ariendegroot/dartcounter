import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingScoreComponent } from './remaining-score.component';

describe('RemainingScoreComponent', () => {
  let component: RemainingScoreComponent;
  let fixture: ComponentFixture<RemainingScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
