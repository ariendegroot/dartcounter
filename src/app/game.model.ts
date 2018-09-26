export class Game {
    public throwing: boolean; 
    public score: number;
    public remaining: number = 501;
    public scores: number[] = [];
    public dartsThrown: number;
    constructor(throwing?: boolean, score: number = 0, remaining: number = 501,  scores: number[] = [], dartsThrown: number = 0) {
        this.throwing = throwing;
        this.score = score;
        this.remaining = remaining;
        this.scores = scores;
        this.dartsThrown = dartsThrown; 
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