import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ManagementUserProjectComponent } from './components/management-user-project/management-user-project.component';
import { MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatSelectModule } from '@angular/material/select';
import { ManagementUseCaseComponent } from './components/management-use-case/management-use-case.component';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './components/planning/planning.component';
import { SimpleTableComponent } from 'src/app/components/table/simple-table/simple-table.component';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'useCases', component: ManagementUseCaseComponent },
  // Otras rutas del módulo...
];

@NgModule({
  declarations: [
    ProjectComponent,
    ManagementUserProjectComponent,
    ManagementUseCaseComponent,
    PlanningComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatAutocompleteModule,
    SimpleTableComponent,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
  ],
  exports:[RouterModule]
})
export class ProjectManagerModule { }
