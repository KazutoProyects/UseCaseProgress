import { RupApproach } from "./rupApproach/RupApproach";

export class Milestone{
    order:number = NaN;
    name:string;
    startMilestone: number = 0;
    endMilestone: number = 0;
    iterations: number = 0;
    daysPerIterations: number = 0;
    rupApproach: RupApproach = new RupApproach();

    constructor( name:string ){
        this.name = name
    }

    
}