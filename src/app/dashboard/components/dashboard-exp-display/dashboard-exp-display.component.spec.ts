import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpDisplayComponent } from './dashboard-exp-display.component';

describe('DashboardExpDisplayComponent', () => {
  let component: DashboardExpDisplayComponent;
  let fixture: ComponentFixture<DashboardExpDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExpDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardExpDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
