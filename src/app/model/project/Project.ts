import { Milestone } from "./milestone/Milestone";
import { Technologie } from "./technologies/Technologie";
import { UseCase } from "./useCase/UseCase";

export class Project{
    // Variables obligatorias
  private id:string = "";
  private name: string;
  private idCreator: string;

  // Variables opcionales
  private description: string = "";
  private startProject: number = NaN;
  private idUsers: Set<string> = new Set();
  private milestones: Milestone[] = [];
  private useCases: UseCase[] = [];
  private technologies: Technologie[] = [];
  

  constructor(name: string, idCreator:string) {
    this.name = name;
    this.idCreator = idCreator;
    
  }
  
  setId(id:string){
    this.id = id;
  }

  setName(name:string){
    this.name = name;
  }

  setIdCreator(idCreator:string){
    this.idCreator = idCreator;
  }

  setIdUsers(idUsers:Set<string>){
    this.idUsers = idUsers;
  }

  addIdUser(idUser:string){
    this.idUsers.add(idUser);
  }

  deleteIdUser(idUser:string):boolean{
    if(idUser != this.idCreator){
      return this.idUsers.delete(idUser);
    }
    return false
  }

  setDescription(description: string){
    this.description = description;
  }

  setStartDate(startProject: number){
    this.startProject = startProject;
  }

  addUseCase(useCase:UseCase){
    this.useCases.push(useCase);
  }

  setUseCases(useCase:UseCase[]){
    this.useCases = useCase;
  }

  addMilestone(milestone:Milestone){
    this.milestones.push(milestone);
  }
  
  setTechnologies(technologies:Technologie[]){
    this.technologies = technologies;
  }

  getId(){
    return this.id;
  }

  getName(){
    return this.name;
  }

  getIdCreator(){
    return this.idCreator;
  }

  getDescripcion():string{
    return this.description;
  }

  getStartProject():number{
    return this.startProject;
  }

  getIdUsers(){
    return this.idUsers;
  }

  getMilestones(){
    return this.milestones;
  }

  getUseCases(){
    return this.useCases;
  }

  getTechnologies(){
    return this.technologies;
  }
  
}