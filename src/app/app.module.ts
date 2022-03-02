import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { ScoreService } from './scoreService';

@NgModule({
  declarations: [AppComponent, ScoreBoardComponent],
  imports: [BrowserModule],
  providers: [ScoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
