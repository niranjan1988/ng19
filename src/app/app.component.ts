import {Component, signal} from '@angular/core';
import {CustomNgIfDirective} from './directives/custom-ng-if.directive';

@Component({
  selector: 'app-root',
  imports: [
    CustomNgIfDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title;
  showTmpl;

  constructor() {
    this.title = signal('ng19');
    this.showTmpl = signal(false);
  }

  update() {
    this.title.update(() => 'ng19.1');
  }

  setNewValue() {
    this.title.update(() => 'ng19.2');
  }

  showTemplate() {
    this.showTmpl.set(!this.showTmpl());
  }
}
