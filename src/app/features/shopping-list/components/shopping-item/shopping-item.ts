import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Item } from '../../../../core/item/models/item-model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-shopping-item',
  imports: [DatePipe, CommonModule],
  templateUrl: './shopping-item.html',
  styleUrl: './shopping-item.scss',
})
export class ShoppingItem {
  @Input() item!: Item;

  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Item>();

  onDelete(): void {
    this.delete.emit(this.item.id);
  }

  onEdit(): void {
    this.edit.emit(this.item);
  }
}
