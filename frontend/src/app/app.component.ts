import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="box">
  <header>
    <div id="navbar">
    <div id="title">
      <h1>Social Media Site</h1>
      <h5>Reddit Clone?</h5>
    </div>
    <div routerLink="/home" routerLinkActive="active">
      <h4 id="nav-1">Home</h4>
    </div>
    <div routerLink="/posts" routerLinkActive="active">
      <h4 id="nav-2">Posts</h4>
    </div>
    <div routerLink="/messages" routerLinkActive="active">
      <h4 id="nav-3">Messages</h4>
    </div>
    <div routerLink="/profile" routerLinkActive="active">
      <h4 id="nav-4">Profile</h4>
    </div>
  </div>
</header>
<main>
  <router-outlet></router-outlet>
</main>
<footer>
  <h4 class="footer-text">&copy; 2022 David Calderon</h4>
</footer>
</div>
  `,
styles: [`
.box{
  display: flex;
  flex-flow: column;
  height: 100%;
 }
 header{
    flex: 0 1 auto;
 }
 main{
    flex: 1 1 auto;
 }
 footer{
    flex: 0 1 80px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .footer-text{
    margin: 0;
 }
 
 header{
    background: linear-gradient(0deg, rgba(20,20,20,1) 5%, rgba(40,40,40,1) 37%, rgba(60,60,60,1) 100%);
 }
 #title{
 text-align: center;
 padding: 0;
    & h1, h5{
       color: rgba(255, 255, 255, 0.8);   
       font-family: Lobster, serif;
       margin: 1rem;
       text-shadow: 1px 1px rgb(0, 0, 0);
    }
    & h1{
      font-size: 1.6rem;
    }
 }
 #navbar{
  display: flex;
 & div{
    margin: auto;
    cursor: pointer;
    & h4{
       color: rgb(255, 255, 255, 0.8);
       font-family: 'Source Sans Pro', serif;
       font-weight: bolder;
       font-size: 16px;
       margin: 0;
       transition-duration: 0.2s;
       &:hover{
          color: rgb(255, 255, 255);
          transform: translateX(-2px) translateY(-2px);
       }
       &#nav-1{
          text-shadow: -1px -1px rgba(198, 198, 198);
       }
       &#nav-2{
          text-shadow: -1px -1px #ff9e00
       }
       &#nav-3{
          text-shadow: -1px -1px #a20101;
       }
       &#nav-4{
          text-shadow: -1px -1px #55aa55;
       }
    }
 }
 }`]
})
export class AppComponent {
  title = 'social-media-project';
}
