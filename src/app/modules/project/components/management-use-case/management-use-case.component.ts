import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectManager } from 'src/app/model';
import { Technologie } from 'src/app/model/project/technologies/Technologie';
import { UseCase } from 'src/app/model/project/useCase/UseCase';

@Component({
  selector: 'app-management-use-case',
  templateUrl: './management-use-case.component.html',
  styleUrls: ['./management-use-case.component.scss']
})
export class ManagementUseCaseComponent {
  formData!: FormGroup;
  useCaseTittle: string = "Use Case";
  projectId:string = "";
  project:Project | undefined;
  projects:ProjectManager;

  selectedTechnologies: Technologie[] = [];
  allTecnologies:Technologie[] = [];

  displayedColumns: string[] = ['name', 'folder'];
  allUseCases:UseCase[] = [];
  clickedRow: UseCase | undefined;
  readOnlyForm: boolean = true;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.formData = this.fb.group({
      name: [{ value: '', disabled: false }, Validators.required],
      folder: [{ value: '', disabled: false }, Validators.required],
      description: [{ value: '', disabled: false }],
      selectedTechnologies: [{ value: [], disabled: true }]
    });
    this.projects =  ProjectManager.getInstance();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id') ?? '';
      this.project = this.projects.getProject(this.projectId);
      this.allUseCases = this.project?.getUseCases() ?? [];
      if (!this.project) {
        this.router.navigate(['']);
      }
      else{
        this.allTecnologies = this.project.getTechnologies();
      }
    });
  }
  clickRow(row: UseCase){
    if(this.clickedRow == row){
      this.clickedRow = undefined;
      this.useCaseTittle = "Use Case"
      this.deleteData();
    }else{
      this.clickedRow = row;
      this.useCaseTittle = this.clickedRow.name;
      this.seeData();
    }
  }
  cambiarValorDeCampo(campo: string, nuevoValor: any) {
    this.formData.get(campo)?.setValue(nuevoValor);
  }

  seeData(){
    this.cambiarValorDeCampo('name', this.clickedRow?.name);
    this.cambiarValorDeCampo('folder', this.clickedRow?.folder);
    this.cambiarValorDeCampo('description', this.clickedRow?.description);
    this.cambiarValorDeCampo('selectedTechnologies', this.clickedRow?.technologies);
  }

  deleteData(){
    this.cambiarValorDeCampo('name', "");
    this.cambiarValorDeCampo('folder', "");
    this.cambiarValorDeCampo('description', "");
    this.cambiarValorDeCampo('selectedTechnologies', []);
  }

}
