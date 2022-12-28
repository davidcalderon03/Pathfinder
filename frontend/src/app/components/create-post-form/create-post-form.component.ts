import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-create-post-form',
  template: `
  <form (ngSubmit)="handlePosting()" method="post" class="post-form">
    <label for="title">Post Title:</label><br>
    <input type="text" id="title" name="title" class="form-field post-header" [(ngModel)]="postHeader"><br>
    <label for="content">Post Content:</label><br>
    <textarea id="content" name="content" class="form-field post-content" [(ngModel)]="postContent"></textarea><br>
    <label for="image">Post Image:</label><br>
    <input type="file" id="image" name="image" class="form-field"><br>
    <button type="submit" class="profile-button"><h4>Submit</h4></button>
</form> 
  `,
  styles: [`
  .post-form{
    max-width: 35rem;
    background-color: #eeeeee;
    border-radius: 10px;
    padding: 2rem;
    margin: 1rem auto;
    font-weight: bold;
  }
  .form-field{
    width: 24rem;
    height: 3rem;
    padding: 0 0 0 .2rem;;
    margin: 0.5rem auto;
    background-color: #f2f2f2;
    &:hover{
      background-color: #eeeeee;
      box-shadow: 4px 3px 8px 0px #aaaadd;
    }
  }
  textarea{
    font-size: 1.1rem;
  }
  .post-header{
    font-family: 'Source Sans Pro', serif;
    font-size: 2rem;
  }
  .post-content{
    height: 10rem;
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
export class CreatePostFormComponent implements OnInit {
  public username: String = "";
  public postHeader: String = "";
  public postContent: String = "";
  public postCategory: String = "";

  @Output() notification = new EventEmitter<{message: String, color: String}>();

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.username = this.issueService.getUsername();
  }
  async handlePosting() {
    let req = this.issueService.post("createpost", {username: this.username, header: this.postHeader, content: this.postContent, labels: [this.postCategory]});
    let res = await lastValueFrom(req);
    if (res) {
      this.notification.emit({message: "Post successfully created!", color: "green"});
    }
  }

}
