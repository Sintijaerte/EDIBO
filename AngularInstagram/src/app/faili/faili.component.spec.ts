import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailiComponent } from './faili.component';

describe('FailiComponent', () => {
  let component: FailiComponent;
  let fixture: ComponentFixture<FailiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
