export interface Player  {
    id?: {
        name?: string,
        scores?: number,
        throwing?: boolean,
        remaining?: number
        dartsThrown?: number,
        gamesWon?: number
    };
}

export class Game {
    constructor(event: Player) {
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