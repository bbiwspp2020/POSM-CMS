import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnMapComponent } from './view-on-map.component';

describe('ViewOnMapComponent', () => {
  let component: ViewOnMapComponent;
  let fixture: ComponentFixture<ViewOnMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
