import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-login-form',
  template: `
  <form class="login-form" (submit)="createAccount($event)">
    <h2 class="login-header">Login</h2>
    <div class="single-input"><input [(ngModel)]="username" name="username" class="form-field single-input-child" placeholder="Username" /></div>
    <div class="single-input"><input [(ngModel)]="password" name="password" class="form-field single-input-child" placeholder="Password" /></div>
    <button class="profile-button">
      <h4>Login</h4>
    </button>
  </form>
  `,
  styles: [`
   .login-form{
    max-width: 35rem;
    background-color: #eeeeee;
    border-radius: 10px;
    padding: 2rem;
    margin: 1rem auto;
    font-weight: bold;
  }
  .form-field{
    width: 16rem;
    height: 3rem;
    padding: 0 0 0 .2rem;;
    margin: 0.5rem auto;
    background-color: #f2f2f2;
    &:hover{
      background-color: #eeeeee;
      box-shadow: 4px 3px 8px 0px #aaaadd;
    }
  }
  input{
    font-size: 100%;
  }
  .profile-button{
    background-color: #2b3988;
    width: 14rem;
    height: 2rem;
    margin: 0.5rem auto;
    padding: 0;
    & h4{
      margin: 0;
      color: #dddddd;
    }
    &:hover {
      transition-duration: 0.3s;
      background-color: #9ba9e8;
      & h4{
        color: #444444;
      }
    }
  }
  `]
})
export class LoginFormComponent implements OnInit {

  public username: String = "";
  public password: String = "";

  @Output() sendNotification = new EventEmitter<{message: String, color: String}>();
  @Output() logIn = new EventEmitter<Boolean>();

  constructor(private issueService: IssueService) {}
  ngOnInit(): void {
  }

  async createAccount(event: any) {
    event.preventDefault();
    let req = this.issueService.post("login", {username: this.username, password: this.password});
    let success = await lastValueFrom(req);

    if (this.username === "" || this.password === "") {
      this.sendNotification.emit({message: "Enter both the username and password.", color: "red"});
    } else if (!success) { 
      this.sendNotification.emit({message: "Invalid username and/or password. Please try again.", color: "red"});
    } else {
      this.sendNotification.emit({message: "Successfully logged in!", color: "green"});
      console.log("Successfully created account");
      this.issueService.setLoggedIn(true);
      this.issueService.setUsername(this.username);
      this.logIn.emit(true);
    }
  }
}
