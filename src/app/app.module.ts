import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './item/first.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { ItemsComponent } from './item/items.component';
import { ModalComponent } from './item/modal.component';
import { SecondComponent } from './item/second.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    FirstComponent,
    SecondComponent,
    ModalComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
