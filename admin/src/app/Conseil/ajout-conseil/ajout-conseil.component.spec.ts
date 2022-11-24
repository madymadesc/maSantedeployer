import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConseilComponent } from './ajout-conseil.component';

describe('AjoutConseilComponent', () => {
  let component: AjoutConseilComponent;
  let fixture: ComponentFixture<AjoutConseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutConseilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
