import { User } from "./User.interface";
export interface UserFactory {
    createUser(id:string, name:string): User;
}