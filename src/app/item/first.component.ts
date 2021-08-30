import { Component, EventEmitter, HostListener, Input, Output, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDialogOptions, ModalDialogService } from '@nativescript/angular';
import { Http, HttpResponse, PropertyChangeData } from '@nativescript/core';
import { Item } from './item';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'ns-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  @Input()
  items: Array<Item>;

  @Output()
  navigateToIndex = new EventEmitter<number>();

  defaultSliderValue = 10;
  sliderValue = this.defaultSliderValue;

  constructor(
    private router: Router,
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef
  ) {

  }

  public showModal() {
    let options = {
      context: {},
      fullscreen: true,
      viewContainerRef: this.vcRef,
      cancelable: false,
      animated: true,
      stretched: true
    } as ModalDialogOptions;
    this.modal.showModal(ModalComponent, options).then(res => {
      if (res) {
        this.performHttpRequest();
      }
    });
  }

  @HostListener('loaded')
  pageOnInit() {
    this.sliderValue = this.defaultSliderValue;
  }

  navigate(): void {
    this.showModal();
  }

  performHttpRequest(): void {
    Http.request({
      url: "https://httpbin.org/post",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        username: "testuser@sometestemail.com",
        password: "someEncryptedPasswordValue",
      }),
    }).then(
      (response: HttpResponse) => {
        this.router.navigate(['second']);
      },
      (e) => { }
    );
  }

  onSliderValueChange(event: PropertyChangeData) {
    const { value } = event;
    this.sliderValue = value;
  }
}
