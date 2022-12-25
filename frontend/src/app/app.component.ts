import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="box">
  <header>
  <nav class="wrapper">
    <div id="title">
      <h1>David Calderon</h1>
      <h5>Personal Site</h5>
    </div>
    <div id="navbar">
    <div routerLink="/home" routerLinkActive="active">
      <h4 id="nav-1">Home</h4>
    </div>
    <div routerLink="/projects" routerLinkActive="active">
      <h4 id="nav-2">Projects</h4>
    </div>
    <div routerLink="/contact" routerLinkActive="active">
      <h4 id="nav-3">Contact</h4>
    </div>
  </div>
  </nav>
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
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,0.8) 5%, rgba(9,15,121,0.9) 37%, rgba(0,212,255,1) 100%);
    border-bottom: 3px solid rgb(0, 0, 0);
 }
 #title{
 text-align: center;
 padding: 1.5rem 0 2.5rem;
    & h1, h5{
       color: rgba(255, 255, 255, 0.8);   
       font-family: Lobster, serif;
       text-shadow: 1px 1px rgb(0, 0, 0);
    }
 }
 #navbar{
 & div{
    display: inline-block;
    margin: 1rem 10%;
    border-radius: 3px;
    padding: 0.4rem;
    cursor: pointer;
    & h4{
       color: rgb(255, 255, 255, 0.8);
       // font-family: "Lato", Arial, Helvetica, sans-serif;
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
    }
 }
 }`]
})
export class AppComponent {
  title = 'social-media-project';
}
