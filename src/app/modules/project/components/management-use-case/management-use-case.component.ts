import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-management-use-case',
  templateUrl: './management-use-case.component.html',
  styleUrls: ['./management-use-case.component.scss']
})
export class ManagementUseCaseComponent {
  formData!: FormGroup;
  useCaseSelected: boolean = false;
  useCaseTittle: string = "Use Case";

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: ['', Validators.required],
      folder: ['', Validators.required],
    });
  }
}
