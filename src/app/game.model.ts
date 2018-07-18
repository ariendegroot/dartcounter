export class Game {
    public score: number;
    public remaining: number = 501;
    public scores: number[] = [];
    public dartsThrown: number;
    public throwing: boolean; 

      
    constructor(score: number = 0, remaining: number = 501,  scores: number[] = [], throwing?: boolean, dartsThrown: number = 0) {
    }
}

export class Stats {
    public gamesWonP1: number;
    public gamesWonP2: number;
    
    constructor(gamesWonP1: number, gamesWonP2: number) {
        this.gamesWonP1 = gamesWonP1;
        this.gamesWonP2 = gamesWonP2;
    }
}