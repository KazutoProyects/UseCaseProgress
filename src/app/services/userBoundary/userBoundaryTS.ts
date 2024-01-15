import { VisitorFactory, DeveloperFactory, ProjectManagerFactory, User } from "src/app/model";
import { UserBoundary } from "./userBoundary.interface";
import { Injectable } from "@angular/core";
import { USERS } from "src/app/data/userData";

@Injectable({
    providedIn: 'root',
  })
export class UserBoundaryTS implements UserBoundary{
    getUserById(userId:string): User | undefined {
        let userSelected;
        const user = USERS.find(user => userId === user.id);
        if (user){
            switch(user.type){
                case "ProjectManager":
                    userSelected = new ProjectManagerFactory().createUser(user.id, user.name);
                    break;
                case "Developer":
                    userSelected = new DeveloperFactory().createUser(user.id, user.name);
                    break;
                case "Visitor":
                    userSelected = new VisitorFactory().createUser(user.id, user.name);
            }
        }
        return userSelected
    }

    getAllUsers(): User[]{
        let users: User[] = []
        USERS.forEach(user =>{
            switch(user.type){
                case "ProjectManager":
                    users.push(new ProjectManagerFactory().createUser(user.id, user.name));
                    break;
                case "Developer":
                    users.push(new DeveloperFactory().createUser(user.id, user.name));
                    break;
                case "Visitor":
                    users.push(new VisitorFactory().createUser(user.id, user.name));
            }
        })
        return users;
    }
    
    
}