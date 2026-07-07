import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../../core/item/models/item-model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-modal-item',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-modal-item.html',
  styleUrl: './add-modal-item.scss',
})
export class AddModalItem {
  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  @Output() create = new EventEmitter<Item>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      quantity: [1, [Validators.required, Validators.min(1)]],
      isCompleted: [false],
      category: [''],
      imageUrl: [''],
      productUrl: ['']
    });
  }


  onCreate(): void {
    const item: Item = {
      id: crypto.randomUUID(),
      title: this.form.value.title ?? '',
      description: this.form.value.description ?? '',
      quantity: this.form.value.quantity ?? 1,
      isCompleted: this.form.value.isCompleted ?? false,
      category: this.form.value.category ?? '',
      productUrl: this.form.value.productUrl ?? '',
      createdAt: new Date()
    }

    this.create.emit(item);

    this.form.reset({
      title: '',
      description: '',
      quantity: 1,
      isCompleted: false,
      category: '',
      productUrl: ''
    });
  }

  onClose(): void {
    this.close.emit();
  }

}
