// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { ClientMeetingsComponent } from './client-meetings/client-meetings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientCreationComponent,
    ClientMeetingsComponent,
    HomeComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule], // Add HttpClientModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
