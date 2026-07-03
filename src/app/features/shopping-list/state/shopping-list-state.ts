import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../../core/item/models/item-model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListState {

  private itemsSubject = new BehaviorSubject<Item[]>([]);

  items$ = this.itemsSubject.asObservable();

  getValue(): Item[] {
    return this.itemsSubject.getValue();
  }

  setItems(items: Item[]) {
    this.itemsSubject.next([...items]);
  }

  addItem(item: Item) {
    this.itemsSubject.next([...this.getValue(), item]);
  }

  removeItem(id: string) {
    this.itemsSubject.next(
      this.getValue().filter(i => i.id !== id)
    );
  }

  updateItem(updated: Item) {
    this.itemsSubject.next(
      this.getValue().map(i =>
        i.id === updated.id ? updated : i
      )
    );
  }

}
