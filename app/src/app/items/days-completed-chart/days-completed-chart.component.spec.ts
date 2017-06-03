import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysCompletedChartComponent } from './days-completed-chart.component';

describe('DaysCompletedChartComponent', () => {
  let component: DaysCompletedChartComponent;
  let fixture: ComponentFixture<DaysCompletedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysCompletedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysCompletedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
