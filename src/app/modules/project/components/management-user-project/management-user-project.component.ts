import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project, UserManager } from 'src/app/model';
import { IUserProxy } from 'src/app/model/user/UserProxy.interface';


@Component({
  selector: 'app-management-user-project',
  templateUrl: './management-user-project.component.html',
  styleUrls: ['./management-user-project.component.scss'],
})
export class ManagementUserProjectComponent {
  userManager:UserManager
  usersProject:IUserProxy[] = []
  allUsers: IUserProxy[];
  selectedUsers: IUserProxy[] = [];

  selectedItems: string[] = []


  constructor(@Inject(MAT_DIALOG_DATA) public data: { project: Project }, private snackBar: MatSnackBar){
    this.userManager = UserManager.getInstance();
    this.userManager.chargeAllUsers();
    this.usersProject = this.userManager.getUsers().filter(user => data.project.getIdUsers().has(user.getId()));
    this.allUsers = this.userManager.getUsers().filter(user =>!data.project.getIdUsers().has(user.getId()));
  }

  getUsersName():string[]{
    const users = this.userManager.getUsers();
    let result:string[] = [];
    users.forEach(user =>{
      result.push(user.getName())
    })
    return result
  }

  deleteName(user: IUserProxy): void {
    const result: boolean = this.data.project.deleteIdUser(user.getId());
    if(result){
      this.usersProject = [];
      this.allUsers = [];
      this.usersProject = this.userManager.getUsers().filter(user => this.data.project.getIdUsers().has(user.getId()));
      this.allUsers = this.userManager.getUsers().filter(user =>!this.data.project.getIdUsers().has(user.getId()));
    } else if (user.getId() == this.data.project.getIdCreator()) {
      this.snackBar.open('You can\'t delete the project creator!', 'Close', {
        duration: 2000,
      });
    }
    
  }

  addUsersToProject():void{
    this.selectedUsers.forEach(user =>{
      this.data.project.addIdUser(user.getId())
    })
    this.usersProject = [];
    this.allUsers = [];
    this.selectedItems = [];
    this.usersProject = this.userManager.getUsers().filter(user => this.data.project.getIdUsers().has(user.getId()));
    this.allUsers = this.userManager.getUsers().filter(user =>!this.data.project.getIdUsers().has(user.getId()));
  }
  
}
