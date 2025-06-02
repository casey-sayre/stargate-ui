import { Component, Input } from '@angular/core';
import { Person } from '../../../../core/models/person.model';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'person-grid',
  templateUrl: './person-grid.html',
  styleUrls: ['./person-grid.css'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule],
})
export class PersonGridComponent {
  @Input() persons: Person[] | null = [];
  @Input() cols: number | null = 1;
}
