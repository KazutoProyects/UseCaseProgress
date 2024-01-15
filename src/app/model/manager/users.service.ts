import { Injectable } from '@angular/core';
import { User } from '../user/User.interface';
import { IUserProxy } from '../user/UserProxy.interface';
import { UserBoundaryTS } from 'src/app/services/userBoundary/userBoundaryTS';
import { UserProxy } from '../user/UserProxy';

@Injectable({
    providedIn:'root',
})
export class UserManager{
    private static instance: UserManager;

    private users: Map<string, IUserProxy> = new Map<string, IUserProxy>();

    private constructor(private userBoundary:UserBoundaryTS){ }

    public static getInstance(): UserManager{
        if (!UserManager.instance){
            UserManager.instance = new UserManager(new UserBoundaryTS());
        }
        return UserManager.instance;
    }

    public chargeUser(userId: string): void {
        if (!this.users.has(userId)) {
          const user = this.userBoundary.getUserById(userId)
          if(user){
            const userProxy = new UserProxy(user)
            this.users.set(userProxy.getId(), userProxy);
          }
        }
    }

    public chargeAllUsers(): void{
        const users: User[] = this.userBoundary.getAllUsers();
        users.forEach(user =>{
            const userProxy = new UserProxy(user)
            this.users.set(userProxy.getId(), userProxy);
        })
    }

    public getUsers():IUserProxy[]{
        return Array.from(this.users.values());
    }

    public getUserById(id:string):IUserProxy | undefined{
        this.chargeUser(id);
        return this.users.get(id);
    }

}