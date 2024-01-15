import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  selector: 'simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  imports: [CommonModule, MatTableModule],
})
export class SimpleTableComponent {
  @Input() data: any[] = []
  @Input() headers:any[] = []
}
