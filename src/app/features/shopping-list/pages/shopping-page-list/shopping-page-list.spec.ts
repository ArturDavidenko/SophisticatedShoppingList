import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingPageList } from './shopping-page-list';

describe('ShoppingPageList', () => {
  let component: ShoppingPageList;
  let fixture: ComponentFixture<ShoppingPageList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingPageList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingPageList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
