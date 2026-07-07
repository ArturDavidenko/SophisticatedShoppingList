import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalItem } from './add-modal-item';

describe('AddModalItem', () => {
  let component: AddModalItem;
  let fixture: ComponentFixture<AddModalItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddModalItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
