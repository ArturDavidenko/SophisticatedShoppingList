import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from "../../components/shopping-item/shopping-item";
import { ShoppingListFacade } from '../../../../core/facade/shopping-list-facade';
import { Observable } from 'rxjs';
import { Item } from '../../../../core/item/models/item-model';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { EditModalItem } from "../../components/edit-modal-item/edit-modal-item";
import { AddModalItem } from "../../components/add-modal-item/add-modal-item";

@Component({
  selector: 'app-shopping-page-list',
  imports: [ShoppingItem, CommonModule, EditModalItem, AddModalItem],
  templateUrl: './shopping-page-list.html',
  styleUrl: './shopping-page-list.scss',
})
export class ShoppingPageList implements OnInit {

  items$: Observable<Item[]>;

  selectedItem: Item | null = null;
  isEditOpen = false;
  isAddOpen = false;
  
  constructor(private facade: ShoppingListFacade, private fb: FormBuilder) {
    this.items$ = this.facade.items$;
  }
 
  ngOnInit(): void {
    this.facade.init();
  }

  onCreate(item: Item): void {
    this.facade.addItem(item);
    this.isAddOpen = false;
  }

  onDeleteItem(id: string): void {
    this.facade.removeItem(id);
  }

  onEditItem(item: Item): void {
    this.selectedItem = item;
    this.isEditOpen = true;
  }

  onOpenAdd(): void {
    this.isAddOpen = true;
  }

  onCloseAdd(): void {
    this.isAddOpen = false;
  }

  onSave(updated: Item): void {
    this.facade.updateItem(updated);
    this.isEditOpen = false;
  }
}
