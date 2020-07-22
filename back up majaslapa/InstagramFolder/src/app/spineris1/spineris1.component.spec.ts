import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

import { Spineris1Component } from './spineris1.component';  

describe('Spineris1Component', () => {
  let component: Spineris1Component;
  let fixture: ComponentFixture<Spineris1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spineris1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spineris1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
