import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      Home page!
    </p>
    <img src="" alt="">
  `,
  styles: [`
    .wrapper{
      max-width: 1280px;
      text-align: center;
      margin: 0 auto;
      padding: 2rem 10px 0;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
