import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-profile',
  template: `
  <body class="is-boxed has-animations"> 
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
                            <a href="#">
								<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title>Laurel</title>
								    <defs>
								        <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="logo-a">
								            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
								            <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
								        </linearGradient>
								        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="logo-b">
								            <stop stop-color="#FDFFDA" offset="0%"/>
								            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
								            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
								        </linearGradient>
								    </defs>
								    <g fill="none" fill-rule="evenodd">
								        <path d="M22 19.22c6.627 0 9.593-6.415 9.593-13.042C31.593-.45 28.627.007 22 .007S10 2.683 10 9.31c0 6.628 5.373 9.91 12 9.91z" fill="url(#logo-a)"/>
								        <path d="M13.666 31.889c7.547 0 10.924-7.307 10.924-14.854 0-7.547-3.377-7.027-10.924-7.027C6.118 10.008 0 13.055 0 20.603c0 7.547 6.118 11.286 13.666 11.286z" fill="url(#logo-b)" transform="matrix(-1 0 0 1 24.59 0)"/>
								    </g>
								</svg>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section class="hero">
                <div class="container">
                    <div class="hero-inner">
						<div class="hero-copy">
	                        <h1 class="hero-title mt-0">Our Team</h1>
                          <img width="400" height="400" src="assets/images/group-picture.JPG" alt="App preview">
	                        <p class="hero-paragraph">As a group of student researchers at Georgia Tech as part of the Grand Challenges program, we strive to find solutions to large-scale and difficult problems.</p>
	                        <div class="hero-cta">
                            <a  [class.button-primary] = "studentSelected === i" (click)="studentSelected = i" ngCli *ngFor="let name of studentNames; index as i" class="button button-shadow" [attr.value]="i">{{studentNames[i]}}</a> 
                        </div>
                        <p>{{studentDescriptions[studentSelected]}}</p>
						</div>
						<div class="hero-app">
							<div class="hero-app-illustration">
								<svg width="999" height="931" xmlns="http://www.w3.org/2000/svg">
								    <defs>
								        <linearGradient x1="92.827%" y1="0%" x2="53.422%" y2="80.087%" id="hero-shape-a">
								            <stop stop-color="#F9425F" offset="0%"/>
								            <stop stop-color="#F97C58" stop-opacity="0" offset="100%"/>
								        </linearGradient>
								        <linearGradient x1="92.827%" y1="0%" x2="53.406%" y2="80.12%" id="hero-shape-b">
								            <stop stop-color="#47A1F9" offset="0%"/>
								            <stop stop-color="#F9425F" stop-opacity="0" offset="80.532%"/>
								            <stop stop-color="#FDFFDA" stop-opacity="0" offset="100%"/>
								        </linearGradient>
								        <linearGradient x1="8.685%" y1="23.733%" x2="85.808%" y2="82.837%" id="hero-shape-c">
								            <stop stop-color="#FFF" stop-opacity=".48" offset="0%"/>
								            <stop stop-color="#FFF" stop-opacity="0" offset="100%"/>
								        </linearGradient>
								        <linearGradient x1="79.483%" y1="15.903%" x2="38.42%" y2="70.124%" id="hero-shape-d">
								            <stop stop-color="#47A1F9" offset="0%"/>
								            <stop stop-color="#FDFFDA" stop-opacity="0" offset="100%"/>
								        </linearGradient>
								        <linearGradient x1="99.037%" y1="26.963%" x2="24.582%" y2="78.557%" id="hero-shape-e">
								            <stop stop-color="#FDFFDA" stop-opacity=".64" offset="0%"/>
								            <stop stop-color="#F97C58" stop-opacity=".24" offset="42.952%"/>
								            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
								        </linearGradient>
								    </defs>
								    <g fill="none" fill-rule="evenodd">
								        <g class="hero-shape-top">
											<g class="is-moving-object is-translating" data-translating-factor="280">
								            	<path d="M680.188 0c-23.36 69.79-58.473 98.3-105.34 85.531-70.301-19.152-189.723-21.734-252.399 91.442-62.676 113.175-144.097 167.832-215.195 118.57C59.855 262.702 24.104 287.85 0 370.988L306.184 566.41c207.164-4.242 305.67-51.612 295.52-142.11-10.152-90.497 34.533-163.55 134.054-219.16l4.512-119.609L680.188 0z" fill="url(#hero-shape-a)" transform="translate(1)"/>
											</g>
											<g class="is-moving-object is-translating" data-translating-factor="100">
												<path d="M817.188 222c-23.36 69.79-58.473 98.3-105.34 85.531-70.301-19.152-189.723-21.734-252.399 91.442-62.676 113.175-144.097 167.832-215.195 118.57-47.399-32.841-83.15-7.693-107.254 75.445L443.184 788.41c207.164-4.242 305.67-51.612 295.52-142.11-10.152-90.497 34.533-163.55 134.054-219.16l4.512-119.609L817.188 222z" fill="url(#hero-shape-b)" transform="rotate(-53 507.635 504.202)"/>
											</g>
								        </g>
								        <g transform="translate(191 416)">
											<g class="is-moving-object is-translating" data-translating-factor="50">
								            	<circle fill="url(#hero-shape-c)" cx="336" cy="190" r="190"/>
											</g>
											<g class="is-moving-object is-translating" data-translating-factor="80">
								            	<path d="M683.766 133.043c-112.048-90.805-184.688-76.302-217.92 43.508-33.23 119.81-125.471 124.8-276.722 14.972-3.156 120.356 53.893 200.09 171.149 239.203 175.882 58.67 346.695-130.398 423.777-239.203 51.388-72.536 17.96-92.03-100.284-58.48z" fill="url(#hero-shape-d)"/>
											</g>
											<g class="is-moving-object is-translating" data-translating-factor="100">
												<path d="M448.206 223.247c-97.52-122.943-154.274-117.426-170.26 16.55C261.958 373.775 169.717 378.766 1.222 254.77c-9.255 95.477 47.794 175.211 171.148 239.203 185.032 95.989 424.986-180.108 424.986-239.203 0-39.396-49.717-49.904-149.15-31.523z" fill="url(#hero-shape-e)" transform="matrix(-1 0 0 1 597.61 0)"/>
											</g>
										</g>
								    </g>
								</svg>
							</div>
							<!-- <img class="device-mockup" src="assets/images/iphone-mockup.png" alt="App preview"> -->
                            <div class="hero-app-dots hero-app-dots-1">
								<svg width="124" height="75" xmlns="http://www.w3.org/2000/svg">
								    <g fill="none" fill-rule="evenodd">
								        <path fill="#FFF" d="M33.392 0l3.624 1.667.984 3.53-1.158 3.36L33.392 10l-3.249-1.639L28 5.196l1.62-3.674z"/>
								        <path fill="#7487A3" d="M74.696 3l1.812.833L77 5.598l-.579 1.68L74.696 8l-1.624-.82L72 5.599l.81-1.837z"/>
								        <path fill="#556B8B" d="M40.696 70l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L38 72.599l.81-1.837z"/>
								        <path fill="#7487A3" d="M4.314 37l2.899 1.334L8 41.157l-.926 2.688L4.314 45l-2.6-1.31L0 41.156l1.295-2.94zM49.314 32l2.899 1.334.787 2.823-.926 2.688L49.314 40l-2.6-1.31L45 36.156l1.295-2.94z"/>
								        <path fill="#556B8B" d="M99.696 56l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L97 58.599l.81-1.837zM112.696 37l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L110 39.599l.81-1.837zM82.696 37l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L80 39.599l.81-1.837zM122.618 57l1.087.5.295 1.059-.347 1.008-1.035.433-.975-.492-.643-.95.486-1.101z"/>
								    </g>
								</svg>
                            </div>
							<div class="hero-app-dots hero-app-dots-2">
								<svg width="124" height="75" xmlns="http://www.w3.org/2000/svg">
								    <g fill="none" fill-rule="evenodd">
								        <path fill="#556B8B" d="M33.392 0l3.624 1.667.984 3.53-1.158 3.36L33.392 10l-3.249-1.639L28 5.196l1.62-3.674zM74.696 3l1.812.833L77 5.598l-.579 1.68L74.696 8l-1.624-.82L72 5.599l.81-1.837zM40.696 70l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L38 72.599l.81-1.837zM4.314 37l2.899 1.334L8 41.157l-.926 2.688L4.314 45l-2.6-1.31L0 41.156l1.295-2.94zM49.314 32l2.899 1.334.787 2.823-.926 2.688L49.314 40l-2.6-1.31L45 36.156l1.295-2.94z"/>
								        <path fill="#FFF" d="M99.696 56l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L97 58.599l.81-1.837z"/>
								        <path fill="#556B8B" d="M112.696 37l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L110 39.599l.81-1.837z"/>
								        <path fill="#FFF" d="M82.696 37l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L80 39.599l.81-1.837z"/>
								        <path fill="#556B8B" d="M122.618 57l1.087.5.295 1.059-.347 1.008-1.035.433-.975-.492-.643-.95.486-1.101z"/>
								    </g>
								</svg>
							</div>
						</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </body>
  `,
  styles: [`
  img{
    border-radius: 3rem; 
    margin-bottom: 1rem
  }
  section.hero{
    padding-top: 0;
  }
  div.hero-copy{
    padding-top: 0;
  }
  @media (min-width: 641px) {
    .hero-copy {
      max-width: 900px;
  }
}
.hero-cta{
    max-width: 900px;
  }
.hero-cta a{
  margin-right: 16px;
  margin-bottom: 16px;
}
  `]
})
export class TeamProfileComponent implements OnInit {
  studentSelected: any = 0;
  studentNames = ["Russell Routhier", "David Calderon", "Nihanth Pinnaka", "Sarah Allison Zuge"];
  studentDescriptions: any[] = [];

  constructor() { 
    this.studentDescriptions[0] = "Russell Routhier (leftmost) is a first-year student at Georgia Tech studying Business. He is involved in being a part-time for WREK Radio, the radio station for Georgia Tech.";
    this.studentDescriptions[1] = "David Calderon (middle left) is a first-year student at Georgia Tech studying Computer Science. He is involved in RoboJackets at GT and enjoys working on websites.";
    this.studentDescriptions[2] = "Nihanth Pinnaka (middle right) is a first-year student at Georgia Tech studying Biomedical Engineering. He is involved in research with vaccines and is pursuing research after college.";
    this.studentDescriptions[3] = "Sarah Allision (Alli) Zuge (rightmost) is a first-year student at Georgia Tech studying Physics. She is involved in various student leadership organizations.";
  }

  ngOnInit(): void {
  }

}
