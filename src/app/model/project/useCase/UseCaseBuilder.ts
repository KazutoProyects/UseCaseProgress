import { UseCase } from "./UseCase";

export class UseCaseBuilder {
    useCase: UseCase
    
    constructor(name: string){
        this.useCase = new UseCase(name);
    }

    build(){
        return this.useCase;
    }
}