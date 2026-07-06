import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from "../../components/shopping-item/shopping-item";
import { ShoppingListFacade } from '../../../../core/facade/shopping-list-facade';
import { Observable } from 'rxjs';
import { Item } from '../../../../core/item/models/item-model';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { EditModalItem } from "../../components/edit-modal-item/edit-modal-item";

@Component({
  selector: 'app-shopping-page-list',
  imports: [ShoppingItem, CommonModule, EditModalItem],
  templateUrl: './shopping-page-list.html',
  styleUrl: './shopping-page-list.scss',
})
export class ShoppingPageList implements OnInit {

  items$: Observable<Item[]>;

  selectedItem: Item | null = null;
  isEditOpen = false;
  
  constructor(private facade: ShoppingListFacade, private fb: FormBuilder) {
    this.items$ = this.facade.items$;
  }
 
  ngOnInit(): void {
    this.facade.init();
  }

  onAddItem(): void {
    const newItem: Item = {
      id: crypto.randomUUID(),
      title: 'New item',
      quantity: 1,
      isCompleted: false,
      createdAt: new Date(),
    };

    this.facade.addItem(newItem);
  }

  onDeleteItem(id: string): void {
    this.facade.removeItem(id);
  }

  onEditItem(item: Item): void {
    this.selectedItem = item;
    this.isEditOpen = true;
  }

  onSave(updated: Item): void {
    this.facade.updateItem(updated);
    this.isEditOpen = false;
  }
}
