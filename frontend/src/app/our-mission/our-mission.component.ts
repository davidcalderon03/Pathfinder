import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-mission',
  template: `
   <section class="features section">
                <div class="container">
					<div class="features-inner section-inner has-bottom-divider">
						<h2 class="section-title mt-0">Our Mission</h2>
                        <div class="features-wrap">
                            <div class="feature feature-override is-revealing">
                                <div class="feature-inner">

                                    <h3 class="feature-title mt-24">Current Problem</h3>
                                    <p class="text-sm mb-0">Many students who exit high school do not know exactly what they want to do in ollege.</p>
                                </div>
                            </div>
							<div class="feature feature-override is-revealing">
                                <div class="feature-inner">

                                    <h3 class="feature-title mt-24">Existing Solutions</h3>
                                    <p class="text-sm mb-0">There are many ideas that exist about how to get students to identify a potential career choice. Here are a few and their issues:</p>
                                </div>
                            </div>
                            <div class="feature feature-override is-revealing">
                                <div class="feature-inner">
                                    
                                    <h3 class="feature-title mt-24">Unfair Advantage</h3>
                                    <p class="text-sm mb-0">Pathfinder encourages students to talk .</p>
                                </div>
                            </div>
                            <div class="feature feature-override is-revealing">
                                <div class="feature-inner">
                                    <h3 class="feature-title mt-24">ddf</h3>
                                    <p class="text-sm mb-0">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                                </div>
                            </div>
							<div class="feature feature-override is-revealing">
									<div class="feature-inner">
                                    <h3 class="feature-title mt-24">Discover</h3>
                                    <p class="text-sm mb-0">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                                </div>
                            </div>
                            <div class="feature feature-override is-revealing">
                                <div class="feature-inner">
                                    <h3 class="feature-title mt-24">Discover</h3>
                                    <p class="text-sm mb-0">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
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


  `]
})
export class OurMissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
