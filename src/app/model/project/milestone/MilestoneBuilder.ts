import { Milestone } from "./Milestone";
import { RupApproach } from "./rupApproach/RupApproach";

export class MilestoneBuilder{
    private milestone: Milestone;

    constructor(name:string){
        this.milestone = new Milestone(name);
    }

    setOrder(number:number): MilestoneBuilder{
        this.milestone.order = number;
        return this;
    }

    setStartMilestoneDate(date: Date): MilestoneBuilder{
        this.milestone.startMilestone = date.getTime();
        return this;
    }

    setStartMilestoneTimestamp(timestamp: number): MilestoneBuilder{
        this.milestone.startMilestone = timestamp;
        return this;
    }

    setEndMilestoneDate(date: Date): MilestoneBuilder{
        this.milestone.endMilestone = date.getTime();
        return this;
    }

    setEndMilestoneTimestamp(timestamp: number): MilestoneBuilder{
        this.milestone.endMilestone = timestamp;
        return this;
    }

    setIterations(iterations: number): MilestoneBuilder{
        this.milestone.iterations = iterations
        return this;
    }

    setDaysPerIterations(daysPerIterations: number): MilestoneBuilder{
        this.milestone.daysPerIterations = daysPerIterations
        return this;
    }

    setRupApproach(rupApproach:RupApproach): MilestoneBuilder{
        this.milestone.rupApproach = rupApproach;
        return this;
    }

    setInception( inception:number): MilestoneBuilder{
        this.milestone.rupApproach.setInception(inception);
        return this;
    }

    setElaboration( elaboration:number): MilestoneBuilder{
        this.milestone.rupApproach.setElaboration( elaboration);
        return this;
    }

    setContruction( construction:number): MilestoneBuilder{
        this.milestone.rupApproach.setConstruction(construction);
        return this;
    }

    setTransition( transition:number): MilestoneBuilder{
        this.milestone.rupApproach.setTransition(transition);
        return this;
    }

    build(){
        return this.milestone;
    }
}