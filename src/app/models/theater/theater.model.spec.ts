import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterModel } from './theater.model';

describe('TheaterModel', () => {
  let component: TheaterModel;
  let fixture: ComponentFixture<TheaterModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterModel ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheaterModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
