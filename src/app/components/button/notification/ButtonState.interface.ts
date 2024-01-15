import { ButtonComponent } from "../button.component";

export interface ButtonState {
    handleButtonClick(component: ButtonComponent): void;
}