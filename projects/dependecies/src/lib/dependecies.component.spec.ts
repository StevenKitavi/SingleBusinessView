import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DEPENDECIESComponent } from './dependecies.component';

describe('DEPENDECIESComponent', () => {
  let component: DEPENDECIESComponent;
  let fixture: ComponentFixture<DEPENDECIESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEPENDECIESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEPENDECIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
