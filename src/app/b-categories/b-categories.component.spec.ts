import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCategoriesComponent } from './b-categories.component';

describe('BCategoriesComponent', () => {
  let component: BCategoriesComponent;
  let fixture: ComponentFixture<BCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
