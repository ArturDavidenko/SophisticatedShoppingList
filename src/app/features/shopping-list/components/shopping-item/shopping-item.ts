import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../../core/item/models/item-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shopping-item',
  imports: [DatePipe],
  templateUrl: './shopping-item.html',
  styleUrl: './shopping-item.scss',
})
export class ShoppingItem {
  @Input() item!: Item;

  @Output() delete = new EventEmitter<string>();

  onDelete(): void {
    this.delete.emit(this.item.id);
  }
}
