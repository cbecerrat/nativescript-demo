import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dialogs, Frame } from '@nativescript/core';
import { AlertOptions } from '@nativescript/core/ui/dialogs/dialogs-common';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.item = this.itemService.getItem(id);
  }

  goBack() {
    Dialogs.alert({
      title: 'Your title',
      message: 'Your message',
      okButtonText: 'Your OK button text',
      cancelable: false
    } as AlertOptions).then(e => {
      Frame.topmost().goBack();
    });
  }
}
