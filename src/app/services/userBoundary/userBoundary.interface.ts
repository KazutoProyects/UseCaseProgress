import { User } from "src/app/model";

export interface UserBoundary{
    getUserById(userId:string):User | undefined;
    getAllUsers(): User[];
}