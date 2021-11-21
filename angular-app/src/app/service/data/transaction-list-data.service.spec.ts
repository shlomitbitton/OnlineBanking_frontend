import { TestBed } from '@angular/core/testing';

import { TransactionListDataService } from './transaction-list-data.service';

describe('TransactionListDataService', () => {
  let service: TransactionListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
