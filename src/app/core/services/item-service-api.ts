import { Injectable } from '@angular/core';
import { Item, MOCK_SHOPPING_ITEMS } from '../item/models/item-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceApi {
  constructor() {}

  public getItems(): Observable<Item[]> {
    return of(MOCK_SHOPPING_ITEMS);
  }
}
