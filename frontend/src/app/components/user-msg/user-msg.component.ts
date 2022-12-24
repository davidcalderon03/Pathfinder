import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-msg',
  template: `
  <div *ngIf="display">
    <p [style.color]="color">{{message}}</p>
  </div>
  `
  ,
  styles: [`

  `]
})
export class UserMsgComponent {
  @Input() message: String;
  @Input() color: String;
  @Input() display: Boolean;

}
