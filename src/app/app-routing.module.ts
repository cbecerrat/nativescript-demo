import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { FirstComponent } from './item/first.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { ItemsComponent } from './item/items.component';
import { SecondComponent } from './item/second.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
