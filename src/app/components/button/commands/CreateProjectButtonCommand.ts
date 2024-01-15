import { FormGroup } from "@angular/forms";
import { ButtonCommand } from "./ButtonCommand.interface";
import { Project } from "src/app/model/project/Project";
import { ProjectBuilder } from "src/app/model/project/ProjectBuilder";
import { ProjectManager } from "src/app/model/manager/projects.service";
import { MilestoneBuilder } from "src/app/model/project/milestone/MilestoneBuilder";
import { Milestone } from "src/app/model/project/milestone/Milestone";

export class CreateProjectButtonCommand implements ButtonCommand{

    execute(data:any): boolean {
        let isCreated: boolean = false 
        if(data instanceof FormGroup && data.valid){
            let projects: ProjectManager =  ProjectManager.getInstance();
            const nameValue = data.value;
            const milestone: Milestone = new MilestoneBuilder(nameValue.nameMilestone)
                .setOrder(0)
                .setStartMilestoneDate(nameValue.startMilestone)
                .setEndMilestoneDate(nameValue.endMilestone)
                .setInception(nameValue.inception)
                .setElaboration(nameValue.elaboration)
                .setContruction(nameValue.construction)
                .setTransition(nameValue.transition)
                .setIterations(nameValue.iterations)
                .setDaysPerIterations(nameValue.daysPerIteration)
                .build();
            const project:Project = new ProjectBuilder(data.get('name')?.value, nameValue.idCreator)
                .setDescription(nameValue.description)
                .setStartDate(nameValue.startProject.getTime())
                .addMilestone(milestone)
                .build();
            projects.addProject(project);
            isCreated = true;
        }
        return isCreated;
        
    }

}