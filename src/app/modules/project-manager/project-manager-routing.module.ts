import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagerComponent } from './project-manager.component';
import { ProjectComponent } from '../project/project.component';
import { ManagementUseCaseComponent } from '../project/components/management-use-case/management-use-case.component';

const routes: Routes = [
  { path: '', component: ProjectManagerComponent},
  { path: ':id', loadChildren: ()=> import('../project').then(module => module.ProjectManagerModule)},
  //{ path: ':id/useCases', loadChildren: () => import('../project').then(module => module.ProjectManagerModule), component: ManagementUseCaseComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagerRoutingModule { }
