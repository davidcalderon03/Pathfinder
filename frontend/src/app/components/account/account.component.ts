import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-account',
  template: `
    <div class="account-section">
      <h2>{{"Account Settings for " + username}}</h2>
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
  `]
})
export class AccountComponent implements OnInit {
  public username: String = "";
  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.username = this.issueService.getUsername();
  }

}
