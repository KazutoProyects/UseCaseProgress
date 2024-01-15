import { ButtonComponent } from "../button.component";
import { ButtonState } from "./ButtonState.interface";

export class LoadingState implements ButtonState {
    handleButtonClick(component: ButtonComponent): void {
      component.charge = true;
    }
  }