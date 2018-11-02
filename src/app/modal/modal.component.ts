import {Component, ComponentRef, Injector, Input, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() imgSrc: string;

  constructor() {
  }

  modalClicked() {
    //delete
  }
}
