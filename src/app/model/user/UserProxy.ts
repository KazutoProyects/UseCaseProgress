import { User } from "./User.interface";
import { IUserProxy } from "./UserProxy.interface";

export class UserProxy implements IUserProxy{
    constructor(private user:User){}
    getId(): string {
        return this.user.getId()
    }
    getName(): string {
        return this.user.getName();
    }
    getType(): string {
        return this.user.getType();
    }

    
}