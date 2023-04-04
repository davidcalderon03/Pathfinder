import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-mission',
  template: `
   <section class="features section">
                <div class="container">
					<div class="features-inner section-inner">
						<h2 class="section-title mt-0">Our Mission</h2>
						<div class="mission-statement">
							<h5>Misson Statement</h5>
							<p>Provide every student with self-guided resources for exploring career options. 
							Connect students to professionals in careers they may be interested in learning about. Help students 
							explore the career path that is right for them, in the way that is right for them.</p>
						</div>
                        <div class="features-wrap">
							<div class="feature feature-override is-revealing">
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
									<h3 class="feature-title mt-24">Problem</h3>
                                    <p class="text-sm mb-0">After graduation, high school students are expected to settle on a career which will 
										determine their futures and rest of their lives. While there are a wide variety of careers with different 
										lifestyles, most students are only exposed in-depth to a handful of options before being expected to make 
										a decision. Lack of knowledge about careers and what works best for them can lead to later major changes 
										in college which could delay graduation, paying for expensive schooling when it is unnecessary for the 
										career they end up in, starting over in a new career later in life, and unhappiness in their work and 
										personal lives based on the effect their career has on them.</p>
                                </div>
                            </div>
                            <div class="feature feature-override is-revealing">
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
									<h3 class="feature-title mt-24">Who is Impacted</h3>
                                    <p class="text-sm mb-0">High schoolers, college students, and graduates alike face uncertainty in their career
										 decisions. Our mission focuses specifically on high school students, as we believe it will help give students
										  an earlier start on exploring what interests them. Even if a student decides to change careers later in life,
										   our goal is that they have enough background knowledge on what existing careers interest them and what 
										   lifestyles suit them. Life is full of changes and unexpected realizations. We aim to provide a way to give
										    people the knowledge they need to more easily navigate these turns and open themselves to further interests.</p>
                                </div>
                            </div>
                            <div class="feature feature-override is-revealing">
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
								<h3 class="feature-title mt-24">Existing Solutions</h3>
                                <p class="text-sm mb-0">Many career exploration platforms focus on statistical information such as salaries, or pathway 
										information such as the qualifications needed to get a career. Often they are fixed, text-based media, unresponsive 
										to users' needs. Though they can provide good information to students, it is difficult to hear directly from professionals
										 and get specific questions answered.</p>
                                </div>
                            </div>
							<div class="feature feature-override is-revealing">
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
									<h3 class="feature-title mt-24">Our Solution</h3>
                                    <p class="text-sm mb-0">Our platform provides a space for students to ask questions to professionals in an open form. It is guided
										 by students' own interests and questions, sparking conversation among students and increasing their knowledge of a variety of 
										 careers. There are both video and written interactions with professionals, with the options for live and asynchronous discussions,
										  divided by career.  </p>
                                </div>
                            </div>
                            <div class="feature feature-override is-revealing">
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
									<h3 class="feature-title mt-24">Why it Works</h3>
                                    <p class="text-sm mb-0">We utilize students' natural curiosity about others' lives to allow them to lead their own exploration of careers.
										 We've found that high school students specifically are interested in learning about the details of the lives of those they have access 
										 to. By expanding their access to people in a wider variety of careers, we can allow them to explore jobs they may not have known about. </p>
                                </div>
                            </div>
							<div class="feature feature-override is-revealing">
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
								<h3 class="feature-title mt-24">Our Appeal</h3>
                                <p class="text-sm mb-0">Our platform uses video-format media, a more modern and appealing form of information. In addition, 
										our solution is designed to be specifically tailored to only what students need, allowing them to lead the
										 conversation based on their own curiosity. We provide up-to-date information direct from professionals, and 
										 which can go beyond the typical statistics and qualifications found on existing platforms </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  `,
  styles: [`
	.feature-override {
    padding: 16px 30px;
    width: 500px;
    max-width: 500px;
    flex-grow: 1;
	}
	.mission-statement{
		margin-bottom: 5rem;
	}


  `]
})
export class OurMissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
