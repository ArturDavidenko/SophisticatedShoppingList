import { Injectable } from '@angular/core';
import { ItemServiceApi } from '../services/item-service-api';
import { ShoppingListState } from '../../features/shopping-list/state/shopping-list-state';
import { ItemStorageService } from '../services/item-storage-service';
import { Item } from '../item/models/item-model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListFacade {
  
  constructor(
    private api: ItemServiceApi,
    private state: ShoppingListState,
    private storage: ItemStorageService
  ) {}

  get items$() {
    return this.state.items$;
  }

  init(): void {
    const stored = this.storage.getAll();

    if (stored.length > 0) {
      this.state.setItems(stored);
      return;
    }

    this.api.getItems().subscribe(items => {
      this.state.setItems(items);
      this.storage.saveAll(items);
    });
  }

  addItem(item: Item): void {
    this.state.addItem(item);
    this.storage.add(item);
  }

  removeItem(id: string): void {
    this.state.removeItem(id);
    this.storage.remove(id);
  }

  updateItem(item: Item): void {
    this.state.updateItem(item);
    this.storage.update(item);
  }
}
