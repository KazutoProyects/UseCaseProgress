import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model';
import { ProjectManager } from 'src/app/model/manager/projects.service';
import { Milestone } from 'src/app/model/project/milestone/Milestone';
import { ManagementUserProjectComponent } from './components/management-user-project/management-user-project.component';
import { PlanningComponent } from './components/planning/planning.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  projects:ProjectManager;
  project: Project | undefined ;
  projectId: string = '';

   

  constructor(private route: ActivatedRoute, private router: Router, private dialog: MatDialog){
    this.projects =  ProjectManager.getInstance();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id') ?? '';
      this.project = this.projects.getProject(this.projectId);

      if (!this.project) {
        this.router.navigate(['']);
      }
    });
  }

  getNameProject():string{
    return this.project?.getName() ?? '';
  }

  getNameCreator():string{
    return this.project?.getIdCreator() ?? '';
  }

  getDescriptionProject():string{
    return this.project?.getDescripcion() ?? '';
  }

  getMilestoneCurrent(): Milestone | undefined{
    let result;
    const milestones: Milestone[] = this.project?.getMilestones() ?? []
    if (milestones.length >= 2){
      const today:number = new Date().getTime();
      let timestampMilestoneCurrent: number = 0;
      milestones.forEach(milestone => {
        if(milestone.startMilestone < today && milestone.startMilestone > timestampMilestoneCurrent){
          timestampMilestoneCurrent = milestone.startMilestone;
          result = milestone
          
        }
      });
    } else if (milestones.length == 1){
      result = milestones[0];
    }
    return result;
  }

  getNameMilestoneCurrent():string{
    let result = ""
    const milestoneCurrent:Milestone | undefined = this.getMilestoneCurrent()
    if(milestoneCurrent){
      result = milestoneCurrent.name;
    }
    return result
  }


  getIterationCurrent():string{
    let result = ""
    const milestoneCurrent:Milestone | undefined = this.getMilestoneCurrent()
    if(milestoneCurrent){
      const today:number = new Date().getTime();
      let currentIteration:number = 0;
      while(currentIteration * 86400000 * milestoneCurrent.daysPerIterations + milestoneCurrent.startMilestone < today){
        currentIteration++;
      }
      
      result = "" + currentIteration
    }
    return result;
  }

  openDialog(type:string){
    switch(type){
      case 'ManagerUser':
        const managerUser = this.dialog.open(ManagementUserProjectComponent, {
          data: { project: this.project }
        })
        break;
      case 'UseCases':
        this.router.navigate(['/project-manager', this.projectId, 'useCases']);                                                                                                                                                                                                                                                                                                                                                                                                                                           
        break;
      case 'Planning':
        const planning = this.dialog.open(PlanningComponent, { });
        break;
      default:
        console.log("Error");
    }
  }
}
