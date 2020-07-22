import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IevadeComponent } from './ievade.component';

describe('IevadeComponent', () => {
  let component: IevadeComponent;
  let fixture: ComponentFixture<IevadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IevadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IevadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
