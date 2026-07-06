import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalItem } from './edit-modal-item';

describe('EditModalItem', () => {
  let component: EditModalItem;
  let fixture: ComponentFixture<EditModalItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModalItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
