import { Component, OnInit, Input } from '@angular/core';

import { Game, Stats } from '../game.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() scoresP1: Game;
  @Input() scoresP2: Game;
  @Input() gameStats: Stats;
  
  constructor() { }

  ngOnInit() {
    
  }

}
