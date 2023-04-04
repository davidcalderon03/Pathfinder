import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
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
	                        <h1 class="hero-title mt-0">A New Way to Navigate Careers</h1>
	                        <p class="hero-paragraph">Pathfinder will enable you to speak to professionals in any field you want, ensuring that you can find out what you are interested in.</p>
	                        <div class="hero-cta"><a class="button button-shadow" href="#">Learn more</a><a class="button button-primary button-shadow" href="#">Early access</a></div>
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

            <section class="features section">
                <div class="container">
					<div class="features-inner section-inner has-bottom-divider">
						<h2 class="section-title mt-0">Primary Features</h2>
                        <div class="features-wrap">
                            <div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="feature-1-a">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-1-b">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M24 48H0V24C0 10.745 10.745 0 24 0h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-1-a)"/>
										        <path d="M40 64H16V40c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-1-b)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Discover</h3>
                                    <p class="text-sm mb-0">Navigate our web service to find the careers that you are interested in, if you're not quite sure yet.</p>
                                </div>
                            </div>
							<div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="68" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="feature-2-a">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-2-b">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M9.941 63.941v-24c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24h-24z" fill="url(#feature-2-a)" transform="rotate(45 33.941 39.941)"/>
										        <path d="M16 0v24c0 13.255 10.745 24 24 24h24V24C64 10.745 53.255 0 40 0H16z" fill="url(#feature-2-b)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Reach Out</h3>
                                    <p class="text-sm mb-0">Talk to professionals in the industry you want to pursue.</p>
                                </div>
                            </div>
                            <div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="43.901%" id="feature-3-a">
										            <stop stop-color="#F97059" stop-opacity=".798" offset="0%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="58.893%" y1="100%" x2="58.893%" y2="18.531%" id="feature-3-b">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-3-c">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path fill="url(#feature-3-a)" opacity=".32" d="M0 24h64v40H0z"/>
										        <path fill="url(#feature-3-b)" d="M40 24H24L0 64h64z"/>
										        <path d="M10 10v22c0 12.15 9.85 22 22 22h22V32c0-12.15-9.85-22-22-22H10z" fill="url(#feature-3-c)" transform="rotate(45 32 32)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Discuss</h3>
                                    <p class="text-sm mb-0">Talk to other students about potential career options, and what each entails.</p>
                                </div>
                            </div>
                            <div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="feature-4-a">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-4-b">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M24 64H0V40c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-4-a)" transform="matrix(-1 0 0 1 48 0)"/>
										        <path d="M40 48H16V24C16 10.745 26.745 0 40 0h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-4-b)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24"></h3>
                                    <p class="text-sm mb-0">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                                </div>
                            </div>
							<div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="feature-5-a">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-5-b">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M24 63H0V39c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-5-a)" transform="matrix(-1 0 0 1 48 0)"/>
										        <path d="M40 48H16V24C16 10.745 26.745 0 40 0h24v24c0 13.255-10.745 24-24 24" fill-opacity=".24" fill="url(#feature-5-a)" transform="matrix(-1 0 0 1 80 0)"/>
										        <path d="M10.113 10.113v22c0 12.15 9.85 22 22 22h22v-22c0-12.15-9.85-22-22-22h-22z" fill="url(#feature-5-b)" transform="rotate(45 32.113 32.113)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Discover</h3>
                                    <p class="text-sm mb-0">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                                </div>
                            </div>
                            <div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-6-a">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="58.893%" y1="100%" x2="58.893%" y2="18.531%" id="feature-6-b">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M24 48H0V24C0 10.745 10.745 0 24 0h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-6-a)"/>
										        <path fill-opacity=".64" fill="url(#feature-6-b)" d="M24 29.229h40V64H0z"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Discover</h3>
                                    <p class="text-sm mb-0">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="media section">
                <div class="container-sm">
                    <div class="media-inner section-inner">
                        <div class="media-header text-center">
                            <h2 class="section-title mt-0">Demonstration</h2>
                            <p class="section-paragraph mb-0">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                        </div>
						<div class="media-canvas">
							<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
							    <defs>
							        <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="media-canvas">
							            <stop stop-color="#06101F" offset="0%"/>
							            <stop stop-color="#1D304B" offset="100%"/>
							        </linearGradient>
							    </defs>
							    <rect width="800" height="450" rx="8" fill="url(#media-canvas)" fill-rule="evenodd"/>
							</svg>
							<div class="media-control">
								<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
								    <defs>
								        <linearGradient x1="87.565%" y1="15.873%" x2="17.086%" y2="80.538%" id="media-control">
								            <stop stop-color="#FFF" stop-opacity=".64" offset="0%"/>
								            <stop stop-color="#FFF" offset="100%"/>
								        </linearGradient>
										<filter x="-500%" y="-500%" width="1000%" height="1000%" filterUnits="objectBoundingBox" id="media-shadow">
                                            <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter"></feOffset>
                                            <feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter"></feGaussianBlur>
                                            <feColorMatrix values="0 0 0 0 0.024 0 0 0 0 0.064 0 0 0 0 0.12 0 0 0 0.24 0" in="shadowBlurOuter"></feColorMatrix>
                                        </filter>
								    </defs>
								    <g fill="none" fill-rule="evenodd">
								        <circle fill="#FFF" cx="48" cy="48" r="48" style="mix-blend-mode:multiply;filter:url(#media-shadow)"/>
										<circle fill="url(#media-control)" cx="48" cy="48" r="48"/>
								        <path d="M44.6 39.2a1.001 1.001 0 0 0-1.6.8v18a1.001 1.001 0 0 0 1.6.8l12-9a.998.998 0 0 0 0-1.6l-12-9z" fill="#1D304B"/>
								    </g>
								</svg>
							</div>
						</div>
                    </div>
                </div>
            </section>

			<section class="newsletter section">
                <div class="container-sm">
                    <div class="newsletter-inner section-inner">
                        <div class="newsletter-header text-center">
                            <h2 class="section-title mt-0">Join our Mailing List</h2>
                            <p class="section-paragraph">Drop in your email to get more updates about the site!</p>
                        </div>
                        <div class="footer-form newsletter-form field field-grouped">
                            <div class="control control-expanded">
                                <input class="input" type="email" name="email" placeholder="Your best email&hellip;">
                            </div>
                            <div class="control">
                                <a class="button button-primary button-block button-shadow" href="#">Early access</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <script src="assets/laurel.js"></script> 
  <script src="assets/scroll-reveal.js"></script> 
</body>
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
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
