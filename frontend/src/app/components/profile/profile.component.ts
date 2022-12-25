import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-profile',
  template: `
  <div class="profile-background">
  <div class="wrapper">
      <form *ngIf="!loggedIn" class="login-form" (submit)="createAccount($event)">
      <h2 class="login-header">{{loggedIn ? "Profile": "Login"}}</h2>
      <app-user-msg [message]="notification" [color]="notificationColor"></app-user-msg>
          <div class="single-input" *ngFor="let loginInput of loginInputs; index as i">
            <input (keyup)="fillFields($event)" name={{fieldNames[i]}} class="form-field single-input-child" placeholder={{loginInput}} type="text" />
            <p class="single-input-child" *ngIf="loginInput === 'Password' && invalidPasswordFlag">Password must be 8+ characters long.</p>
            <p class="single-input-child" *ngIf="loginInput === 'Username' && usernameTakenFlag">Username Taken!</p>
          </div>
          <button class="profile-button">
            <h4>{{loggedIn? 'Profile' : 'Log In'}}</h4>
          </button>
      </form>
      



    </div>
    </div>
  `,
  styles: [`
  .profile-background{
    background: linear-gradient(90deg, #2b3988 0%, #12279e 50%, #000d56 100%);
    height: 100%;
  }
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
    font-family: "Lato", serif;
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
      background-color: #eeeeee;
      & h4{
        color: #444444;
      }
    }
  }
  `
  ]
})
export class ProfileComponent implements OnInit {

  public loginInputs = ["First Name", "Last Name", "Username", "Email", "Password"];
  public fieldNames = ["firstName", "lastName", "username", "email", "password"];
  public notification: String = "";
  public notificationColor: String = "green";
  public formType: String = "Create Account";

  public usernameTakenFlag = false;
  public invalidPasswordFlag = false;
  public firstName: String = "";
  public lastName: String = "";
  public username: String = "";
  public email: String = "";
  public password: String = "";

  public loggedIn: Boolean = false;


  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }
  fillFields($event: any) {
    console.log("Attribute: " + $event.target.name + " New Value: " + $event.target.value);
    let v = $event.target.value;
    switch($event.target.name) {
      case "firstName": this.firstName = v; break;
      case "lastName": this.lastName = v; break;
      case "username": 
        this.username = v;
        this.issueService.post("usernameexists", {username: this.username}).subscribe( res => 
          {
            console.log("Response: " + res);
            if(res === true) {
              this.usernameTakenFlag = true;
            }
            else {
              this.usernameTakenFlag = false;
            }
          }
          );
          break;
      case "email": this.email = v; break;
      case "password": 
      if (v.length < 8) {
        this.invalidPasswordFlag = true;
      } else {
        this.invalidPasswordFlag = false;
      }
      this.password = v; break;
    }
  }
  createAccount(event: any) {
    event.preventDefault();
    console.log("Account Creation Attempted.");
    console.log("Password: " + this.password);
    console.log("First Name: " + this.firstName);
    if (this.username === "" || this.firstName === "" || this.lastName === "" || this.password === "" || this.email === "") {
      this.notification = "You must complete all fields."
      this.destroyNotification();
    } else if (this.usernameTakenFlag) {
      this.notification = "This username is taken.";
      this.destroyNotification();
    } else if (this.invalidPasswordFlag) {
      this.notification = "Invalid password. Must be at least 8 characters long.";
      this.destroyNotification();
    } else {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.issueService.post("createuser", data).subscribe( res => console.log(res) )
      this.notification = "Successfully Created Account!";
      console.log("Successfully created account");
      this.username = this.firstName = this.lastName = this.email = this.password = "";
      this.notificationColor = "#ffffff";
      this.destroyNotification();
    }
  }
  destroyNotification(): void {
    setTimeout( () => {
      this.notification = ""
    }, 1500);
  }
}
