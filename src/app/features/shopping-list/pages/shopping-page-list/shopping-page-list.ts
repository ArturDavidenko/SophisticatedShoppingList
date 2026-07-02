import { Component } from '@angular/core';
import { ShoppingItem } from "../../components/shopping-item/shopping-item";

@Component({
  selector: 'app-shopping-page-list',
  imports: [ShoppingItem],
  templateUrl: './shopping-page-list.html',
  styleUrl: './shopping-page-list.scss',
})
export class ShoppingPageList {

}
