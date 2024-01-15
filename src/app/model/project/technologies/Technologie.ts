export class Technologie {
    name:string;
    weight: number;
    progress: number;
    constructor(name:string, weight:number){
        this.progress = 0;
        this.name = name;
        this.weight = weight;
    }
}