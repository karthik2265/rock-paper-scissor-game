import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  score = 0;

  incrementScore() {
    this.score = this.score + 1;
  }
}
