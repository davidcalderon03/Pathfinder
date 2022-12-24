import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-messages',
  template: `
    <p>
      messages works!
    </p>
    <!-- <p *ngFor='let message of messages'>{{message.usernameSender}}</p> -->
  `,
  styles: [
  ]
})
export class MessagesComponent implements OnInit {

  public messages: any = [];



  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get("../../assets/messages.json").subscribe( data => {
      this.messages = data;
    });
    // this.messages = this.messages.messages;
    // console.log(this.messages);
  }

}
