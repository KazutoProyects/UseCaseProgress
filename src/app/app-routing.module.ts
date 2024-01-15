import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'project-manager', pathMatch:'full'},
  { path: 'project-manager', loadChildren: ()=> import('./modules/project-manager').then(module => module.ProjectManagerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
