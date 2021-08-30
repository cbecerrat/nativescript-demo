import { Component, HostListener } from '@angular/core';
import { Frame } from '@nativescript/core';

@Component({
  selector: 'ns-second',
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @HostListener('loaded')
  pageOnInit() {

  }

  @HostListener('unloaded')
  pageDestroy() {

  }

  goBack() {
    Frame.topmost().goBack();
  }
}
