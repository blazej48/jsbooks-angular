import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {ModalComponent} from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
  }

  openImg(url: string) {
    const componentRef: ComponentRef<ModalComponent> = this.componentFactoryResolver
      .resolveComponentFactory(ModalComponent)
      .create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
    (componentRef.instance as ModalComponent).modalClicked = () => componentRef.destroy();
    componentRef.instance.imgSrc = url;

  }

}
