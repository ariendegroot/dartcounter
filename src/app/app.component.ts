
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Game } from './game.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
 
  currentGamePlayer1 = new Game(true, 0,501,[]);
  currentGamePlayer2 = new Game(false, 0,501,[]);
  

  constructor() { 
  
  }

  ngOnInit() {
    
  }

  onInputScore(){
    //Calculate remainingscore
    this.currentGamePlayer1.remaining = this.currentGamePlayer1.remaining - this.currentGamePlayer1.score;

    //Push score to current leg scores
    this.currentGamePlayer1.scores.push(this.currentGamePlayer1.score);

    //Calculate number of darts thrown  
    this.currentGamePlayer1.dartsThrown = this.currentGamePlayer1.scores.length * 3;

    //Reset input value  
    this.currentGamePlayer1.score = null;

    //Calculate game average  
    this.currentGamePlayer1.average =  this.currentGamePlayer1 .scores.reduce((a, b) => a + b, 0) / this.currentGamePlayer1.scores.length;
    
    //Reset gameScore
    if(this.currentGamePlayer1.remaining <= 0 || this.currentGamePlayer2.remaining <=0 ) {
      alert('Game ended, starting new game');
      this.currentGamePlayer1 = new Game(true, 0,501,[]);
      this.currentGamePlayer2 = new Game(false, 0,501,[]);
    }
    this.currentGamePlayer1.throwing = false;
    this.currentGamePlayer2.throwing = true;
    document.getElementById("scoreInputP2").focus();
}

onInputScoreP2(){
  //Calculate remainingscore
  this.currentGamePlayer2.remaining = this.currentGamePlayer2.remaining - this.currentGamePlayer2.score;

  //Push score to current leg scores
  this.currentGamePlayer2.scores.push(this.currentGamePlayer2.score);

  //Calculate number of darts thrown  
  this.currentGamePlayer2.dartsThrown = this.currentGamePlayer2.scores.length * 3;

  //Reset input value  
  this.currentGamePlayer2.score = null;

  //Calculate game average  
  this.currentGamePlayer2.average =  this.currentGamePlayer2 .scores.reduce((a, b) => a + b, 0) / this.currentGamePlayer2.scores.length;
  
  //Reset gameScore
  if(this.currentGamePlayer2.remaining <= 0 || this.currentGamePlayer2.remaining <=0 ) {
    alert('Game ended, starting new game');
    this.currentGamePlayer1 = new Game(true, 0,501,[]);
    this.currentGamePlayer2 = new Game(false, 0,501,[]);
  }
  this.currentGamePlayer1.throwing = true;
  this.currentGamePlayer2.throwing = false;
  document.getElementById("scoreInput").focus();
  
}


}
 