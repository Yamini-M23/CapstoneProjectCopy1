import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAadminsComponent } from './saadmins.component';

describe('SAadminsComponent', () => {
  let component: SAadminsComponent;
  let fixture: ComponentFixture<SAadminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SAadminsComponent]
    });
    fixture = TestBed.createComponent(SAadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
