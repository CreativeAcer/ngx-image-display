import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgximagedisplayComponent } from './ngximagedisplay.component';

describe('NgximagedisplayComponent', () => {
  let component: NgximagedisplayComponent;
  let fixture: ComponentFixture<NgximagedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgximagedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgximagedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
