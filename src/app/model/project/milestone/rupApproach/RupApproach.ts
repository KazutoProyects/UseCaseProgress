export class RupApproach{
    inception: number = 0;
    elaboration: number = 0;
    construction: number = 0;
    transition: number = 0;

    constructor(){}

    setInception( inception:number){
        this.inception = inception
    }

    setElaboration( elaboration:number){
        this.elaboration = elaboration
    }

    setConstruction( construction:number){
        this.construction = construction
    }

    setTransition( transition:number){
        this.transition = transition
    }
}