import { TestBed } from '@angular/core/testing';

import { AddPlanServiceService } from './add-plan-service.service';

describe('AddPlanServiceService', () => {
  let service: AddPlanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPlanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
