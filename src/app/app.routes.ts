import { Routes } from '@angular/router';
import { ShoppingPageList } from './features/shopping-list/pages/shopping-page-list/shopping-page-list';

export const routes: Routes = [
  {
    path: '',
    component: ShoppingPageList,
    pathMatch: 'full'
  },
  {
    path: '**', 
    redirectTo: '',
  },
];
