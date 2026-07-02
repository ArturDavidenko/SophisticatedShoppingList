import { TestBed } from '@angular/core/testing';

import { ShoppingListState } from './shopping-list-state';

describe('ShoppingListState', () => {
  let service: ShoppingListState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
