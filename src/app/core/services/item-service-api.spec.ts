import { TestBed } from '@angular/core/testing';

import { ItemServiceApi } from './item-service-api';

describe('ItemServiceApi', () => {
  let service: ItemServiceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemServiceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
