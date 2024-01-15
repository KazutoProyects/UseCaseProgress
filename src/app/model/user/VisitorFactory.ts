import { User } from "./User.interface";
import { UserFactory } from "./UserFactory.interface";
import { Visitor } from "./Visitor";

export class VisitorFactory implements UserFactory{
    createUser(id:string, name:string): User {
        return new Visitor(id, name);
    }
}