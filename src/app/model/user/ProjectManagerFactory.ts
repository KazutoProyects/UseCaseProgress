import { ProjectManagerUser } from "./ProjectManagerUser";
import { User } from "./User.interface";
import { UserFactory } from "./UserFactory.interface";

export class ProjectManagerFactory implements UserFactory{
    createUser(id:string, name:string): User {
        return new ProjectManagerUser(id, name);
    }
}