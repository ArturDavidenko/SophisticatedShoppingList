import { TestBed } from '@angular/core/testing';

import { ShoppingListFacade } from './shopping-list-facade';

describe('ShoppingListFacade', () => {
  let service: ShoppingListFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
