import { Technologie } from "../technologies/Technologie";

export class UseCase {
    name:string;

    id:string = "";
    folder:string = "";
    description:string = "";
    technologies: Technologie[] = [];
    technologiesDelete: Technologie[] = [];
 
    constructor(name:string){
        this.name = name;
    }
}