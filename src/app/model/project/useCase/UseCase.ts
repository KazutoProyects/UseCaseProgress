import { withEnabledBlockingInitialNavigation } from "@angular/router";
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

    clone():UseCase{

        let useCaseClone: UseCase = new UseCase(this.name + "-copy");
        useCaseClone.description = this.description;
        useCaseClone.folder = this.folder;

        this.technologies.forEach(technologie => {
            const technologieCopy = new Technologie(technologie.name, technologie.weight)
            useCaseClone.technologies.push(technologieCopy);
        });

        this.technologiesDelete.forEach(technologie => {
            const technologieCopy = new Technologie(technologie.name, technologie.weight)
            useCaseClone.technologiesDelete.push(technologieCopy);
        });
        return useCaseClone;
    }
}