import { Project } from "./Project";
import { Milestone } from "./milestone/Milestone";

export class ProjectBuilder {
    private project: Project;
    private idUsers: Set<string> = new Set();
  
    constructor(name: string, idCreator:string) {
        this.project = new Project(name, idCreator);
        this.concatenateUser(idCreator);
    }
  
    setDescription(description: string): ProjectBuilder {
        this.project.setDescription(description);
        return this;
    }
  
    setStartDate(startDate: number): ProjectBuilder {
        this.project.setStartDate(startDate);
        return this;
    }

    addMilestone(milestone:Milestone):ProjectBuilder {
        this.project.addMilestone(milestone)
        return this;
    }

    addUser(idUser:string): ProjectBuilder {
        this.concatenateUser(idUser);
        return this;
    }

    addUsers(idUsers:string[]): ProjectBuilder{
        idUsers.forEach(idUser => {
            this.addUser(idUser);
        });
        return this;
    }
    
    build(): Project {
        this.project.setId(this.generateRandomId());
        this.project.setIdUsers(this.idUsers);
        return this.project;
    }

    private concatenateUser(idUser:string): void{
        if (!this.idUsers.has(idUser)) {
            this.idUsers.add(idUser);
        }
    }
    
    private generateRandomId(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomId += characters[randomIndex];
        }
        return randomId;
      }
  }