import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierConseilComponent } from './modifier-conseil.component';

describe('ModifierConseilComponent', () => {
  let component: ModifierConseilComponent;
  let fixture: ComponentFixture<ModifierConseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierConseilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
