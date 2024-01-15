import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagerComponent } from './project-manager.component';
import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from 'src/app/components';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    ProjectManagerComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule,
    MatIconModule,
    MatDialogModule,
    CardComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class ProjectManagerModule { }
