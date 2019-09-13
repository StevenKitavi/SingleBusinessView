import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaihustleComponent } from './naihustle.component';

describe('NaihustleComponent', () => {
  let component: NaihustleComponent;
  let fixture: ComponentFixture<NaihustleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaihustleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaihustleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
