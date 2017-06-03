import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysStreakChartComponent } from './days-streak-chart.component';

describe('DaysStreakChartComponent', () => {
  let component: DaysStreakChartComponent;
  let fixture: ComponentFixture<DaysStreakChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysStreakChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysStreakChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
