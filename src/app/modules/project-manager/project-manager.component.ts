import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/components';
import { CardProjectDecorator } from 'src/app/components/card/logic/CardProjectDecorator';
import { Card } from 'src/app/components/card/logic/Card.interface';
import { BaseCard } from 'src/app/components/card/logic/BaseCard';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PROJECTS } from 'src/app/data/projectsData';
import { ProjectBuilder } from 'src/app/model/project/ProjectBuilder';
import { Project } from 'src/app/model/project/Project';
import { ProjectManager } from 'src/app/model/manager/projects.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { Router } from '@angular/router';
import { UserManager } from 'src/app/model';
import { Milestone } from 'src/app/model/project/milestone/Milestone';
import { MilestoneBuilder } from 'src/app/model/project/milestone/MilestoneBuilder';


@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.scss'],
})
export class ProjectManagerComponent implements OnInit {

  projects: ProjectManager = ProjectManager.getInstance();
  users: UserManager = UserManager.getInstance();
  idsProjects:string[] = [];

  myProjectListCurrentPosition:number = 0;
  myProjectList:Card[] = [];
  myProjectListCurrent: Card[] = [];

  projectListCurrentPosition:number = 0;
  projectList:Card[] = [];
  projectListCurrent: Card[] = [];

  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router){
    this.inicializarDatos();
    this.actualizarCards();
    this.actualizarCards2();
  }

  ngOnInit(): void {
    this.projects.subscribeToProjectAdded().subscribe(newProject => {
      if(newProject.getIdUsers().has(this.authService.getCurrentUser().getId())){
        let card:BaseCard = new BaseCard(newProject.getName() , newProject.getDescripcion(), "footer", newProject.getId());
        const creator = this.users.getUserById(newProject.getIdCreator())?.getName();
        let cardProject:CardProjectDecorator = new CardProjectDecorator(card, creator ?? "");
        if(newProject.getIdCreator() == this.authService.getCurrentUser().getId()){
          this.myProjectList.push(cardProject);
        }
        this.projectList.push(cardProject);
      }
    });
  }

  getNameUser():string{
    return this.authService.getCurrentUser().getName();
  }

  back():void{
    if(this.myProjectListCurrentPosition == 0){
      this.myProjectListCurrentPosition = this.myProjectList.length;
    }
    else{
      this.myProjectListCurrentPosition--;
    }
    this.actualizarCards();
  }

  next():void{
    if(this.myProjectListCurrentPosition == this.myProjectList.length){
      this.myProjectListCurrentPosition=0;
    }
    else{
      this.myProjectListCurrentPosition++;
    }
    this.actualizarCards();
  }

  actualizarCards(){
    this.myProjectListCurrent[0] = this.myProjectList[this.myProjectListCurrentPosition % this.myProjectList.length]
    this.myProjectListCurrent[1] = this.myProjectList[(this.myProjectListCurrentPosition + 1) % this.myProjectList.length]
    this.myProjectListCurrent[2] = this.myProjectList[(this.myProjectListCurrentPosition + 2) % this.myProjectList.length]
  }

  back2():void{
    if(this.projectListCurrentPosition == 0){
      this.projectListCurrentPosition = this.projectList.length;
    }
    else{
      this.projectListCurrentPosition--;
    }
    this.actualizarCards();
  }

  next2():void{
    if(this.projectListCurrentPosition==this.projectList.length){
      this.projectListCurrentPosition=0;
    }
    else{
      this.projectListCurrentPosition++;
    }
    this.actualizarCards2();
  }

  actualizarCards2(){
    this.projectListCurrent[0] = this.projectList[this.projectListCurrentPosition % this.projectList.length]
    this.projectListCurrent[1] = this.projectList[(this.projectListCurrentPosition + 1) % this.projectList.length]
    this.projectListCurrent[2] = this.projectList[(this.projectListCurrentPosition + 2) % this.projectList.length]
  }

  inicializarDatos(){
    //TODO: La carga de datos debería de estar en otro sitio
    const userProjects = PROJECTS.filter(project => {
      return project.idUsers && project.idUsers.includes(this.authService.getCurrentUser().getId());
    });
    userProjects.forEach(userProject => {
      const milestone: Milestone = new MilestoneBuilder(userProject.milestones[0].name)
        .setOrder(0)
        .setStartMilestoneTimestamp(userProject.milestones[0].startMilestone)
        .setEndMilestoneTimestamp(userProject.milestones[0].endMilestone)
        .setInception(userProject.milestones[0].rupApproach.inception)
        .setElaboration(userProject.milestones[0].rupApproach.elaboration)
        .setContruction(userProject.milestones[0].rupApproach.construction)
        .setTransition(userProject.milestones[0].rupApproach.transition)
        .setIterations(userProject.milestones[0].iterations)
        .setDaysPerIterations(userProject.milestones[0].daysPerIterations)
        .build();
      const project:Project = new ProjectBuilder(userProject.name, userProject.idCreator)
        .setDescription(userProject.description)
        .setStartDate(userProject.startProject)
        .addMilestone(milestone)
        .build();
      this.projects.addProject(project);
    });
    this.projects.getProjects().forEach(project => {
      if(project.getIdUsers().has(this.authService.getCurrentUser().getId())){
        this.idsProjects.push(project.getId());
        const creator = this.users.getUserById(project.getIdCreator())?.getName();
        let card:BaseCard = new BaseCard(project.getName() , project.getDescripcion(), "footer", project.getId());
        let cardProject:CardProjectDecorator = new CardProjectDecorator(card, creator ?? "");
        if(project.getIdCreator() == this.authService.getCurrentUser().getId()){
          this.myProjectList.push(cardProject);
        }
        this.projectList.push(cardProject);
      }
    });
  }

  openDialog(){
    const dialogRef = this.dialog.open(CreateProjectComponent, {
    });
  }

  navegateToProject(idProject:string){
    const route = `/project-manager/${idProject}`;
    this.router.navigate([route]);

  }
}
