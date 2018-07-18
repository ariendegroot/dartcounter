import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../game.model';

@Component({
  selector: 'app-remaining-score',
  templateUrl: './remaining-score.component.html',
  styleUrls: ['./remaining-score.component.css']
})
export class RemainingScoreComponent implements OnInit {
  @Input() player1: Game;
  @Input() player2: Game;

  constructor() { }

  ngOnInit() {
  }

}
 