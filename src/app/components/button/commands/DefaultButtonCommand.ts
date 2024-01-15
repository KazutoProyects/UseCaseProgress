import { ButtonCommand } from "./ButtonCommand.interface";

export class DefaultButtonCommand implements ButtonCommand{
    execute(data:any): boolean {
        console.log("COMMAND NOT IMPLEMENTED")
        return true;
        
    }

}