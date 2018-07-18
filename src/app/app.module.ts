import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreInputComponent } from './score-input/score-input.component';
import { RemainingScoreComponent } from './remaining-score/remaining-score.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreInputComponent,
    RemainingScoreComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
