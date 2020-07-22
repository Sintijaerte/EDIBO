import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvnetComponent } from './tvnet.component';

describe('TvnetComponent', () => {
  let component: TvnetComponent;
  let fixture: ComponentFixture<TvnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
