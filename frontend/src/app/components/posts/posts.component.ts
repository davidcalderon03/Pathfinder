import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-posts',
  template: `
  <div class="posts-background">
    <div class="wrapper">
      <app-user-msg [message]="notification" [color]="notificationColor"></app-user-msg>
      <div *ngIf="username!==''; else loggedOut">
        <button class="main-button" (click)="newPostInitialization = !newPostInitialization">{{!newPostInitialization ? "Create Post": "Cancel"}}</button>
        <app-create-post-form *ngIf="newPostInitialization" (notification)="sendNotification($event)"></app-create-post-form>
      </div>
      <ng-template #loggedOut>
        <h4>Login to Post and See Posts!</h4>
      </ng-template>
    </div>
  </div>
  `,
  styles: [`
  .posts-background{
    background: linear-gradient(90deg, #2b3988 0%, #12279e 50%, #000d56 100%);
    height: 100%;
  }
  .main-button{
    background-color: #9ba9e8;
    width: 14rem;
    height: 2rem;
    margin: 0.5rem auto;
    padding: 0;
    & h4{
      margin: 0;
      color: #444444;
    }
    &:hover {
      transition-duration: 0.3s;
      background-color: #2b3988;
      & h4{
        color: #dddddd;
      }
    }
  }
  `]
})
export class PostsComponent implements OnInit {
  public username: String = "";
  public newPostInitialization: Boolean = false;

  public notification: String = "";
  public notificationColor: String = "";

  constructor(private issueService: IssueService) { }
  ngOnInit(): void {
    this.username = this.issueService.getUsername();
  }
  sendNotification(data: {message: String, color: String}) {
    this.notification = data.message;
    this.notificationColor = data.color;
    setTimeout(() => {
      this.notification = "";
    }, 1000);
  }
}