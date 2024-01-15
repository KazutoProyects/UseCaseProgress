import { MatSnackBar } from "@angular/material/snack-bar";
import { ButtonComponent } from "../button.component";
import { ButtonState } from "./ButtonState.interface";

export class ErrorState implements ButtonState {
    constructor(private snackBar: MatSnackBar) {}
    handleButtonClick(component: ButtonComponent): void {
      component.charge = false;
      this.snackBar.open('Something went wrong!', 'Close', {
        duration: 2000,
      });
    }
  }