import { Component, OnInit, Input, Output } from '@angular/core';

import { Game, Stats } from './game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  currentGamePlayer1 = new Game(true);
  currentGamePlayer2 = new Game();
  
  currentGameStats = new Stats(0,0);
  
  constructor() {}

  ngOnInit() {}

  handleScore(event: Game) {
    this.currentGamePlayer1 = Object.assign({}, this.currentGamePlayer1, event);
  }

  handleScore2(event: Game) {
    this.currentGamePlayer2 = Object.assign({}, this.currentGamePlayer2, event);
  }

}