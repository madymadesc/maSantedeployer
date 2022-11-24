import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDonneeComponent } from './detail-donnee.component';

describe('DetailDonneeComponent', () => {
  let component: DetailDonneeComponent;
  let fixture: ComponentFixture<DetailDonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDonneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
