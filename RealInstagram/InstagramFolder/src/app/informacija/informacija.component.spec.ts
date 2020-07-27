import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacijaComponent } from './informacija.component';

describe('InformacijaComponent', () => {
  let component: InformacijaComponent;
  let fixture: ComponentFixture<InformacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
