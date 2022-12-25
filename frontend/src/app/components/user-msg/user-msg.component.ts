import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-msg',
  template: `
  <div [style.backgroundColor]="color" *ngIf="message!==''">
    <h3>{{message}}</h3>
  </div>
  `
  ,
  styles: [`
    div{
      margin: 1rem auto;
      padding: 0.5rem 0rem;
      max-width: 20rem;
    }
    h3{
      color: #ffffff;
      font-height: 2rem;
      font-size: 1.2rem;
      margin: auto;
    }
  `]
})
export class UserMsgComponent {
  @Input() message: String = "This is a message.";
  @Input() color: String = "#ffffff";
}
