import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IluzijaComponent } from './iluzija.component';

describe('IluzijaComponent', () => {
  let component: IluzijaComponent;
  let fixture: ComponentFixture<IluzijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IluzijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IluzijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
