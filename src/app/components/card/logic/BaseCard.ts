import { Card } from "./Card.interface";


export class BaseCard implements Card {
    private title: string = ""
    private description: string = ""
    private footer: string = ""
    private id: string = "";
    constructor(title: string, description: string, footer: string, id:string) {
        this.title = title;
        this.description = description;
        this.footer = footer;
        this.id = id;
    }
    getId(): string {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getDescription(): string {
        return this.description;
    }
    getFooter(): string {
        return this.footer;
    }
}