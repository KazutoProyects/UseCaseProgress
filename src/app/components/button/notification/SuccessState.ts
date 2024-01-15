import { ButtonComponent } from "../button.component";
import { ButtonState } from "./ButtonState.interface";
import { MatSnackBar } from '@angular/material/snack-bar';

export class SuccessState implements ButtonState {
    constructor(private snackBar: MatSnackBar) {}
    handleButtonClick(component: ButtonComponent): void {
      component.charge = false;

      this.snackBar.open('It came out successfully!', 'Close', {
        duration: 2000,
      });
    }
  }

