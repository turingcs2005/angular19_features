import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWrapperComponent } from './date-wrapper.component';

describe('DateWrapperComponent', () => {
  let component: DateWrapperComponent;
  let fixture: ComponentFixture<DateWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
