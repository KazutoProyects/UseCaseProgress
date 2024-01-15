import { Component, Input } from '@angular/core';
import { BaseCard } from './logic/BaseCard';
import { Card } from './logic/Card.interface';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card;

  constructor(){
    this.card = new BaseCard("", "", "", "");
  }
}
