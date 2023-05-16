import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEduDisplayComponent } from './dashboard-edu-display.component';

describe('DashboardEduDisplayComponent', () => {
  let component: DashboardEduDisplayComponent;
  let fixture: ComponentFixture<DashboardEduDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEduDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEduDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
