import { Card } from "./Card.interface";

export class CardProjectDecorator implements Card {

    private card: Card;
    private author: string;

    constructor(card: Card, author: string){
        this.card = card;
        this.author = author;
    }
    getId(): string {
        return this.card.getId();
    }
    getTitle(): string {
        return this.card.getTitle();
    }
    getDescription(): string {
        return this.card.getDescription();
    }
    getFooter(): string {
        return "created by " + this.getAuthor();
    }

    private getAuthor():string{
        return this.author;
    }

}