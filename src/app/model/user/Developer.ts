import { User } from "./User.interface";

export class Developer implements User{
    private id:string;
    private name:string;
    

    constructor(id:string, name:string){
        this.id = id;
        this.name = name;
    }
    getType(): string {
        return "Developer";
    }

    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }

}