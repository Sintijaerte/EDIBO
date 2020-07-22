import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelfiComponent } from './delfi.component';

describe('DelfiComponent', () => {
  let component: DelfiComponent;
  let fixture: ComponentFixture<DelfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
