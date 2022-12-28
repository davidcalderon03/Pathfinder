import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-account',
  template: `
    <div class="account-section">
      <h2>{{"Account Settings for " + username}}</h2>
      <button id="logout-button" (click)="handleLogout()"><h4>Logout</h4></button>
    </div>
  `,
  styles: [`
  .account-section{
    max-width: 35rem;
    background-color: #eeeeee;
    border-radius: 10px;
    padding: 2rem;
    margin: 1rem auto;
    font-weight: bold;
  }
  #logout-button{
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
export class AccountComponent implements OnInit {
  public username: String = "";

  @Output() acceptLogout = new EventEmitter<Boolean>();

  constructor(private issueService: IssueService) { }
  ngOnInit(): void {
    this.username = this.issueService.getUsername();
  }

  handleLogout() {
    this.issueService.setLoggedIn(false);
    this.issueService.setUsername("");
    this.acceptLogout.emit(false);
  }

}
