import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaproductsComponent } from './saproducts.component';

describe('SaproductsComponent', () => {
  let component: SaproductsComponent;
  let fixture: ComponentFixture<SaproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaproductsComponent]
    });
    fixture = TestBed.createComponent(SaproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
