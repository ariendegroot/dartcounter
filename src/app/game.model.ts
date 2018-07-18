export class Game {
    public remaining: number = 501;
    public score: number;
    public scores: number[] = [];
    public dartsThrown: number;
    public average: number;
    public throwing: boolean; 

    constructor(throwing: boolean, score?: number, remaining?: number, scores?: number[], dartsThrown?: number, average?: number) {
        this.score = score;
        this.remaining = remaining;
        this.scores = scores;
        this.dartsThrown = 0;
        this.average = average;
        this.throwing = throwing;
    }
}