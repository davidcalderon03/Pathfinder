import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-profile',
  template: `
  <div class="profile-background">
  <div class="wrapper">
    <div *ngIf="!loggedIn" class="form-change-area">
      <h3>{{formVersion === 0 ? "Don't Have An Account?" : "Already Have an Account?"}}</h3>
      <button id="form-change-button" (click)="swapFormVersion()"><p>{{formVersion === 0 ? "Create Account": "Login"}}</p></button>
    </div>
  <app-user-msg [message]="notification" [color]="notificationColor"></app-user-msg>
  <app-login-form *ngIf="!loggedIn && formVersion === 0" (sendNotification)="handleNotification($event)" (logIn)="changeLogin($event)"></app-login-form>
  <app-signup-form *ngIf="!loggedIn && formVersion === 1" (sendNotification)="handleNotification($event)" (logIn)="changeLogin($event)"></app-signup-form>
  <app-account (acceptLogout)="changeLogin($event)" *ngIf="loggedIn"></app-account>
  </div>
  </div>
  `,
  styles: [`
  .profile-background{
    background: linear-gradient(90deg, #2b3988 0%, #12279e 50%, #000d56 100%);
    height: 100%;
  }
  .form-change-area{
    background-color: #eeeeee;
    border-radius: 5px;
    width: 15rem;
    margin: auto;
    padding: 1rem;
  }
  #form-change-button{
    font-size: 100%;
    min-width: 6rem;
    background-color: #2b3988;
    & p{
      color: #dddddd;
    }
    &:hover {
      transition-duration: 0.3s;
      background-color: #9ba9e8;
      & p{
        color: #444444;
      }
    }
  }
  `]
})
export class ProfileComponent implements OnInit {

  public loggedIn: Boolean = false;
  public username: String = "";
  public formVersion: Number = 0; //0 for login, 1 for create account
  public notification: String = "";
  public notificationColor: String = "black";


  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.loggedIn = this.issueService.getLoggedIn();
    this.username = this.issueService.getUsername();
  }
  swapFormVersion() {
    if (this.formVersion === 0) {
      this.formVersion = 1;
    } else {
      this.formVersion = 0;
    }
  }
  handleNotification(data: {message: String, color: String}) {
    this.notification = data.message;
    this.notificationColor = data.color;
    setTimeout( () => {
      this.notification = "";
    }, 1500);
  }
  changeLogin(data: Boolean) {
    this.loggedIn = data;
    console.log("Logged in: " + this.loggedIn);
  }
}
