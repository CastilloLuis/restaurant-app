import { Component } from '@angular/core';

/**
 * Generated class for the ClosebuttonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'closebutton',
  templateUrl: 'closebutton.html'
})
export class ClosebuttonComponent {

  text: string;

  constructor() {
    console.log('Hello ClosebuttonComponent Component');
    this.text = 'Hello World';
  }

  close() {
  }

}
