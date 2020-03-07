import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from '../app/components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressSpinnerModule } from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { BlogComponent } from './components/blog/blog.component';
//import { ApiService } from "./api.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ToolbarComponent,
    SkillsComponent,
    WorksComponent,
    BlogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
