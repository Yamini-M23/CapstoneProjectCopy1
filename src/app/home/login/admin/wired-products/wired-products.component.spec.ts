import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiredProductsComponent } from './wired-products.component';

describe('WiredProductsComponent', () => {
  let component: WiredProductsComponent;
  let fixture: ComponentFixture<WiredProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WiredProductsComponent]
    });
    fixture = TestBed.createComponent(WiredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
