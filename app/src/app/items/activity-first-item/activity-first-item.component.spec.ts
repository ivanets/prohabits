import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFirstItemComponent } from './activity-first-item.component';

describe('ActivityFirstItemComponent', () => {
  let component: ActivityFirstItemComponent;
  let fixture: ComponentFixture<ActivityFirstItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFirstItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFirstItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
