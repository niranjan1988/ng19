import {Directive, EmbeddedViewRef, Input, signal, TemplateRef, ViewContainerRef, WritableSignal} from '@angular/core';

@Directive({
    selector: '[appCustomNgIf]'
})
export class CustomNgIfDirective {

    containerView: WritableSignal<EmbeddedViewRef<any> | null>;

    constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
        this.containerView = signal(null);
    }

    @Input('appCustomNgIf') set show(show: boolean) {
        this.showTemplate(show);
    }

    showTemplate(show: boolean) {
        if (!this.containerView() && show) {
            const embedView = this.vcRef.createEmbeddedView(this.templateRef);
            this.containerView.set(embedView);
        } else {
            this.vcRef.clear();
            this.containerView.set(null);
        }
    }
}
