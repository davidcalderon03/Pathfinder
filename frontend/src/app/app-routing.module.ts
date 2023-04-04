import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ServicesComponent } from './services/services.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'landingPage', pathMatch: 'full'},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'ourMission', component: OurMissionComponent},
  {path: 'teamProfile', component: TeamProfileComponent},
  {path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
