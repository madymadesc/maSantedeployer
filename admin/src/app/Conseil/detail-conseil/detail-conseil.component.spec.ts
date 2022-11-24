import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConseilComponent } from './detail-conseil.component';

describe('DetailConseilComponent', () => {
  let component: DetailConseilComponent;
  let fixture: ComponentFixture<DetailConseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailConseilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
