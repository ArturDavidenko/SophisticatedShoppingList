import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage-service';
import { Item } from '../item/models/item-model';


const STORAGE_KEY = 'shopping_items';

@Injectable({
  providedIn: 'root',
})
export class ItemStorageService {

  constructor(private storage: LocalStorageService) {}
  
  getAll(): Item[] {
    return this.storage.get<Item[]>(STORAGE_KEY) ?? [];
  }

  saveAll(items: Item[]): void {
    this.storage.set(STORAGE_KEY, items);
  }

  add(item: Item): void {
    const items = this.getAll();
    this.saveAll([...items, item]);
  }

  remove(itemId: string): void {
    const items = this.getAll();
    this.saveAll(items.filter(i => i.id !== itemId));
  }

  update(updated: Item): void {
    const items = this.getAll();

    this.saveAll(
      items.map(i =>
        i.id === updated.id ? updated : i
      )
    );
  }

  clear(): void {
    this.storage.remove(STORAGE_KEY);
  }
}
