import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PogaComponent } from './poga.component';

describe('PogaComponent', () => {
  let component: PogaComponent;
  let fixture: ComponentFixture<PogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
