import { Technologie } from "../technologies/Technologie";
import { UseCase } from "./UseCase";

export class UseCaseBuilder {
    useCase: UseCase
    
    constructor(name: string){
        this.useCase = new UseCase(name);
    }

    setId(id:string): UseCaseBuilder{
        this.useCase.id = id;
        return this;
    }

    setFolder(folder:string): UseCaseBuilder{
        this.useCase.folder = folder;
        return this;
    }

    setDescription(description:string): UseCaseBuilder{
        this.useCase.description = description;
        return this;
    }

    setTechnologies(technologies:Technologie[]): UseCaseBuilder{
        this.useCase.technologies = technologies;
        return this;
    }

    addTechnologies(technologie:Technologie): UseCaseBuilder{
        this.useCase.technologies.push();
        return this;
    }

    build(): UseCase{
        if (this.useCase.id == ""){
            this.useCase.id = this.generateRandomId()
        }
        return this.useCase;
    }

    private generateRandomId(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomId += characters[randomIndex];
        }
        return randomId;
      }

    
}