import { Injectable } from '@angular/core';
import { Project } from '../project/Project';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn:'root',
})
export class ProjectManager{
    private static instance: ProjectManager;
    private projects: Map<string, Project> = new Map<string, Project>();

    private projectAddedSubject: Subject<Project> = new Subject<Project>();

    private constructor(){ }

    public static getInstance(): ProjectManager{
        if (!ProjectManager.instance){
            ProjectManager.instance = new ProjectManager();
        }
        return ProjectManager.instance;
        
    }

    public addProject(project: Project): void {
        const projectId = project.getId();
        if (!this.projects.has(projectId)) {
          this.projects.set(projectId, project);
          this.projectAddedSubject.next(project);
        }
    }

    public getProject(projectId: string): Project | undefined {
        return this.projects.get(projectId);
    }

    public getProjects(): Project[]{
        return Array.from(this.projects.values());
    }

    public subscribeToProjectAdded(): Observable<Project> {
        return this.projectAddedSubject.asObservable();
    }

}