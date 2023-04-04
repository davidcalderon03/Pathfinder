import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ServicesComponent } from './services/services.component';
import { MailingListComponent } from './components/mailing-list/mailing-list.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';

import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ServicesComponent,
    MailingListComponent,
    OurMissionComponent,
    TeamProfileComponent,

    ProfileComponent,
    MessagesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
