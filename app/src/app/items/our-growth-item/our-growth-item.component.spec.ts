import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGrowthItemComponent } from './our-growth-item.component';

describe('OurGrowthItemComponent', () => {
  let component: OurGrowthItemComponent;
  let fixture: ComponentFixture<OurGrowthItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurGrowthItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurGrowthItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
