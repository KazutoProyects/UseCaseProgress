import { Developer } from "./Developer";
import { User } from "./User.interface";
import { UserFactory } from "./UserFactory.interface";

export class DeveloperFactory implements UserFactory{
    createUser(id:string, name:string): User {
        return new Developer(id, name);
    }
}