import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOverrideComponent } from './rxjs-override.component';

describe('RxjsOverrideComponent', () => {
  let component: RxjsOverrideComponent;
  let fixture: ComponentFixture<RxjsOverrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsOverrideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
