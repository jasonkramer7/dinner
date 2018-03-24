/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MealsService } from './meals.service';

describe('MealsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealsService]
    });
  });

  it('should ...', inject([MealsService], (service: MealsService) => {
    expect(service).toBeTruthy();
  }));
});
