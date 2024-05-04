import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatModel } from './seat.model';

describe('SeatModel', () => {
  let component: SeatModel;
  let fixture: ComponentFixture<SeatModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatModel ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
