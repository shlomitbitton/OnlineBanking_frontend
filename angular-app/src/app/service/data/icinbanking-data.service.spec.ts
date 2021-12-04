import { TestBed } from '@angular/core/testing';
import { ICINBankingDataService } from './icinbanking-data.service';

describe('ICINBankingDataService', () => {
  let service: ICINBankingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ICINBankingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
