import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../scoreService';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css'],
})
export class ScoreBoardComponent implements OnInit {
  score: number = 12;

  constructor(public scoreService: ScoreService) {}

  ngOnInit(): void {}
}
