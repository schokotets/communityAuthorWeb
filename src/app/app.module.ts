import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubmitComponent } from './submit/submit.component';
import { StoryService } from './story.service';
import { StoryComponent } from './story/story.component';


@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
