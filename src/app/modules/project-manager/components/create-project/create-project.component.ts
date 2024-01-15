import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonCommand } from 'src/app/components/button/commands/ButtonCommand.interface';
import { CreateProjectButtonCommand } from 'src/app/components/button/commands/CreateProjectButtonCommand';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  formData!: FormGroup;
  command:ButtonCommand =  new CreateProjectButtonCommand();
  
 
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CreateProjectComponent>, private authService: AuthService) {
  }

  ngOnInit() {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    this.formData = this.fb.group({
      name: ['', Validators.required],
      daysPerIteration: ['', [Validators.required]],
      description:['', []],
      startProject: [startOfDay , Validators.required],
      nameMilestone:['', [Validators.required]],
      iterations:[, [Validators.required]],
      inception: [0 , [Validators.required]],
      elaboration: [0 , [Validators.required]],
      construction: [0 , [Validators.required]],
      transition: [0 , [Validators.required]],
      startMilestone: [startOfDay, Validators.required],
      endMilestone: [null, Validators.required],
      idCreator: [this.authService.getCurrentUser().getId(  ), []]
    });

    this.formData.get('startMilestone')?.valueChanges.subscribe(() => {
      this.calculateEndMilestone();
    });

    this.formData.get('iterations')?.valueChanges.subscribe(() => {
      this.calculateEndMilestone();
    });

    this.formData.get('daysPerIteration')?.valueChanges.subscribe(() => {
      this.calculateEndMilestone();
    });
  }

  submitForm(){
  
  }

  rupApproach(){
    this.formData.get('inception')?.setValue(10);
    this.formData.get('elaboration')?.setValue(20);
    this.formData.get('construction')?.setValue(60);
    this.formData.get('transition')?.setValue(10);
  }

  phaseterations( phase:string ): number{
    return Math.round((this.formData.get(phase)?.value / 100) * (this.formData.get('iterations')?.value || 0));
  }

  private calculateEndMilestone() {
    const startMilestone = new Date(this.formData.get('startMilestone')?.value);
    const iterations = this.formData.get('iterations')?.value;
    const daysPerIteration = this.formData.get('daysPerIteration')?.value;
    if (startMilestone && iterations && daysPerIteration) {
      console.log("condición")
      const endMilestone = new Date(startMilestone.getTime() + iterations * daysPerIteration * 24 * 60 * 60 * 1000);
      this.formData.get('endMilestone')?.setValue(endMilestone);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
