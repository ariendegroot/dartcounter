import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game, Stats } from '../game.model';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.css']
})
export class ScoreInputComponent implements OnInit {
  @Input() player1: Game;
  @Input() player2: Game;
  @Input() gameStats: Stats;

  currentPlayer: Game;
  
  @Output() 
  inputEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  inputEvent2: EventEmitter<any> = new EventEmitter();

  constructor() {
   
   }

  ngOnInit() {
    this.player1.throwing = true;
  }

  onInputScore(score: number){
    if(score > 180) {
      (<HTMLInputElement>document.getElementById("scoreInput")).value = null;
      return;
    }
    if(this.player1.throwing === true) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    } 
      //Calculate remainingscore
      this.currentPlayer.remaining = this.currentPlayer.remaining - score;
      //Push score to current leg scores
      this.currentPlayer.scores.push(score);
      //Calculate number of darts thrown  
      this.currentPlayer.dartsThrown = this.currentPlayer. scores.length * 3;

      this.player1.throwing = !this.player1.throwing;

      //Reset gameScore
      if(this.currentPlayer.remaining <= 0) {
        this.endGame(); 
      }
      (<HTMLInputElement>document.getElementById("scoreInput")).value = null;
      document.getElementById("scoreInput").focus();
   }

  endGame() {
    alert('Game ended, starting new game');
    if(this.player1.remaining <= 0) {
      this.gameStats.gamesWonP1++;
    } else {
      this.gameStats.gamesWonP2++;
    }
    
    if(this.player1.scores.length >= this.player2.scores.length && this.player1.remaining < this.player2.remaining ) {
      this.player1.throwing = true;
    } else { 
      this.player1.throwing = false;
    }

    //Start new game
     this.player1 = new Game();
     this.player2 = new Game();
     this.inputEvent.emit(this.player1);
     this.inputEvent2.emit(this.player2);
     
  }

}
