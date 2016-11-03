class Stopwatch {
    
    constructor(display,results){
        this.running = false;
        this.display = display;
        this.results = results;
        this.laps = [];
        this.reset();
        this.print(this.times);
        this.state = { 
            secondsElapsed: 0, 
            laps: [],
            lastClearedIncrementer: null
        };
    }
    
    reset() {
        this.times = [0,0,0]
    }
    start() {

    }
    
    
}