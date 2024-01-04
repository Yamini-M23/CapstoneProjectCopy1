import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessProductsComponent } from './wireless-products.component';

describe('WirelessProductsComponent', () => {
  let component: WirelessProductsComponent;
  let fixture: ComponentFixture<WirelessProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WirelessProductsComponent]
    });
    fixture = TestBed.createComponent(WirelessProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
