import { Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ButtonCommand } from './commands/ButtonCommand.interface';
import { DefaultButtonCommand } from './commands/DefaultButtonCommand';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ButtonState } from './notification/ButtonState.interface';
import { LoadingState } from './notification/LoadingState';
import { SuccessState } from './notification/SuccessState';
import { ErrorState } from './notification/ErrorState';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule ],
})
export class ButtonComponent {

  @Input() label: string = 'Action';
  @Input() commandButton: ButtonCommand = new DefaultButtonCommand();
  @Input() labelCharge: string = 'Acting';
  @Input() data:any = "";
  charge: boolean = false;
  buttonState:ButtonState = new LoadingState();
  constructor(private snackBar: MatSnackBar){}

  executeCommand(data:any) {
    this.buttonState.handleButtonClick(this);
    const result:boolean = this.commandButton.execute(data);
    if(result){
      this.buttonState =  new SuccessState(this.snackBar);
      this.buttonState.handleButtonClick(this);
    }
    else{
      this.buttonState =  new ErrorState(this.snackBar);
      this.buttonState.handleButtonClick(this);
    }
    this.buttonState =  new LoadingState();
  }
  

}
