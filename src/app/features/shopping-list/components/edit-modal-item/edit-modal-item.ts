import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Item } from '../../../../core/item/models/item-model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-modal-item',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-modal-item.html',
  styleUrl: './edit-modal-item.scss',
})
export class EditModalItem implements OnChanges {
  
  @Input() item: Item | null = null;
  @Input() isOpen = false;

  @Output() save = new EventEmitter<Item>();
  @Output() close = new EventEmitter<void>();

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


  ngOnChanges(): void {
    if (this.item) {
      this.form.patchValue(this.item);
    }
  }

   onSave(): void {
    if (!this.item) return;

    const updated: Item = {
      ...this.item,
      ...this.form.value
    };

    this.save.emit(updated);
  }

  onClose(): void {
    this.close.emit();
  }

}
