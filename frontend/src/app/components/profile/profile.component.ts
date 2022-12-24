import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-profile',
  template: `
  <div class="profile-background">
  <div class="wrapper">
      <div *ngIf=" this.notification!=='' ">
        <h1>{{notification}}</h1>
      </div>
      <form class="main-form" (ngSubmit)="createAccount()">
          <div class="single-input" *ngFor="let loginInput of loginInputs; index as i">
            <input (keyup)="fillFields($event)" name={{fieldNames[i]}} class="form-field single-input-child" placeholder={{loginInput}} type="text">
            <p class="single-input-child" *ngIf="loginInput === 'Password' && invalidPasswordFlag">Password must be 8+ characters long.</p>
            <p class="single-input-child" *ngIf="loginInput === 'Username' && usernameTakenFlag">Username Taken!</p>
          </div>
        <button>{{formType}}</button>
      </form>
    </div>
    </div>
  `,
  styles: [
  `
  .profile-background{
    color: 
  }
  .main-form{
    background-color: #eeeeee;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10rem 2rem;
    margin: 2rem auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-family: "Lato", serif;
    font-weight: bold;
    margin-left: 0;
    height: 20rem;
  }
  .form-field{
    width: 8rem;
    height: 2rem;
    padding: 0;
    margin: 0.5rem auto;
    background-color: #f2f2f2;
    border-radius: 10px;
    &:hover{
      background-color: #f2fff6;
      box-shadow: 4px 3px 8px 0px #ab8133;
    }
  }
  .single-input{
    
  }
  .single-input-child{
    display: inline-block;
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
  createAccount() {
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
