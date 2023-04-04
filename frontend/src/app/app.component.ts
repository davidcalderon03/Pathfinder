import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="box">
  <header class="header">
		<h1 class="logo"><a routerLink="/landingPage" routerLinkActive="active">Pathfinder</a></h1>
      <ul class="main-nav">
          <li><a routerLink="/landingPage" routerLinkActive="active">Landing Page</a></li>
          <li><a routerLink="/services" routerLinkActive="active">Overview</a></li>
          <div class="dropdown">
            <a class="dropdownlink">About Us</a>
            <div class="dropdown-content">
               <a routerLink="/ourMission" routerLinkActive="active">Our Mission</a>
               <a routerLink="/teamProfile" routerLinkActive="active">Team Profile</a>
            </div>
         </div>
      </ul>
</header> 

<main>
  <router-outlet></router-outlet>
</main>
<footer class="site-footer">
            <div class="container">
                <div class="site-footer-inner has-top-divider">
                    <div class="brand footer-brand">
                        <a href="#">
							<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
								<title>Laurel</title>
								<defs>
									<linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="logo-footer-a">
										<stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										<stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
									</linearGradient>
									<linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="logo-footer-b">
										<stop stop-color="#FDFFDA" offset="0%"/>
										<stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										<stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
									</linearGradient>
								</defs>
								<g fill="none" fill-rule="evenodd">
									<path d="M22 19.22c6.627 0 9.593-6.415 9.593-13.042C31.593-.45 28.627.007 22 .007S10 2.683 10 9.31c0 6.628 5.373 9.91 12 9.91z" fill="url(#logo-footer-a)"/>
									<path d="M13.666 31.889c7.547 0 10.924-7.307 10.924-14.854 0-7.547-3.377-7.027-10.924-7.027C6.118 10.008 0 13.055 0 20.603c0 7.547 6.118 11.286 13.666 11.286z" fill="url(#logo-footer-b)" transform="matrix(-1 0 0 1 24.59 0)"/>
								</g>
							</svg>
                        </a>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                          <a routerLink="/landingPage" routerLinkActive="active">Landing Page</a>
                        </li>
                        <li>
                          <a routerLink="/services" routerLinkActive="active">Overview</a>
                        </li>
                        <li>
                        <a routerLink="/ourMission" routerLinkActive="active">Our Mission</a>
                        </li>
                        <li>
                        <a routerLink="/teamProfile" routerLinkActive="active">Team Profile</a>
                        </li>
                    </ul>
                    <ul class="footer-social-links list-reset">
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Facebook</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Twitter</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Google</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="footer-copyright">&copy; 2023 David Calderon, Nihanth Pinnaka, Russell Routhier, Sarah Allision Zuge</div>
                </div>
            </div>
        </footer>
</div>
  `,
styles: [`
.active{
  color: #718daa !important;
}
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
* {
	box-sizing: border-box;
}
body {
	font-family: 'Montserrat', sans-serif;
	line-height: 1.6;
	margin: 0;
	min-height: 100vh;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
h2,h3,a {
	color: #34495e;
}
a {
	text-decoration: none;
}
.logo {
	margin: 0;
	font-size: 1.45em;
}
.main-nav {
	margin-top: 5px;

}
.logo a,
.main-nav a {
	padding: 10px 2rem;
	text-transform: uppercase;
	text-align: center;
	display: block;
}
.main-nav a {
	color: #34495e;
	font-size: .99em;
}
.main-nav a:hover, h1 a:hover {
	color: #718daa;
}
.header {
	padding-top: .5em;
	padding-bottom: .5em;
}
@media (min-width: 769px) {
	.header,
	.main-nav {
		display: flex;
	}
	.header {
		flex-direction: column;
		align-items: center;
    	.header{
		width: 80%;
		margin: 0 auto;
		max-width: 1150px;
	}
	}

}
@media (min-width: 1025px) {
	.header {
		flex-direction: row;
		justify-content: space-between;
	}
}



/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

/* Show the dropdown content when the button is hovered over */
.dropdown:hover .dropdown-content {
  display: block;
  opacity: 1;
  background-color: #06101F;
}

/* Style the links inside the dropdown */
.dropdown-content a {
  color: #34495e;
  padding: 10px;
  text-decoration: none;
  display: block;
}

/* Add a background color to the dropdown links on hover */
.dropdown-content a:hover {
  color: #f1f1f1;
}
`]
})
export class AppComponent {
  title = 'pathfinder';
}
