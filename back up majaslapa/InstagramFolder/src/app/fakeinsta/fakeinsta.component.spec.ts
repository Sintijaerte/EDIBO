import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeinstaComponent } from './fakeinsta.component';

describe('FakeinstaComponent', () => {
  let component: FakeinstaComponent;
  let fixture: ComponentFixture<FakeinstaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeinstaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeinstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
