import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMaladieComponent } from './ajout-maladie.component';

describe('AjoutMaladieComponent', () => {
  let component: AjoutMaladieComponent;
  let fixture: ComponentFixture<AjoutMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
