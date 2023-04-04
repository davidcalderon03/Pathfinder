import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IssueService } from '../../issue.service';


@Component({
  selector: 'app-mailing-list',
  template: `
      <form class="login-form" (submit)="createAccount($event)">
      <h2 class="login-header">Sign Up</h2>
          <div class="single-input"><input [(ngModel)]="firstName" name="firstName" class="form-field single-input-child" placeholder="First Name" autocomplete="off" /></div>
          <div class="single-input"><input [(ngModel)]="lastName" name="lastName" class="form-field single-input-child" placeholder="Last Name" autocomplete="off" /></div>
          <div class="single-input"><input [(ngModel)]="username" name="username" class="form-field single-input-child" placeholder="Username" autocomplete="off" /></div>
          <div class="single-input"><input [(ngModel)]="email" name="email" class="form-field single-input-child" placeholder="Email" autocomplete="off" type="email" /></div>
          <div class="single-input"><input [(ngModel)]="password" name="password" class="form-field single-input-child" placeholder="Password" autocomplete="off" type="password" /></div>
          <button class="profile-button">
            <h4>Create Account</h4>
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
export class MailingListComponent implements OnInit {
  public loggedIn: Boolean = false;
  public firstName: String = "";
  public lastName: String = "";
  public username: String = "";
  public email: String = "";
  public password: String = "";

  @Output() sendNotification = new EventEmitter<{message: String, color: String}>();
  @Output() logIn = new EventEmitter<Boolean>();

  constructor(private issueService: IssueService) {}
  ngOnInit(): void {
  }

  async createAccount(event: any) {
    event.preventDefault();
    let req = this.issueService.post("usernameexists", {username: this.username});
    let usernameTaken = await lastValueFrom(req);
    if (this.username === "" || this.firstName === "" || this.lastName === "" || this.password === "" || this.email === "") {
      this.sendNotification.emit({message: "You must complete all fields", color: "red"});
    } else if (usernameTaken) {
      this.sendNotification.emit({message: "This username is taken", color: "red"});
    } else if (this.password.length < 8) {
      this.sendNotification.emit({message: "Invalid password. Must be at least 8 characters long.", color: "red"});
    } else {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.issueService.post("createuser", data).subscribe( res => console.log(res) )
      this.sendNotification.emit({message: "Successfully created account!", color: "green"});
      console.log("Successfully created account");
      this.issueService.setLoggedIn(true);
      this.issueService.setUsername(this.username);
      this.logIn.emit(true);
    }
  }
}
