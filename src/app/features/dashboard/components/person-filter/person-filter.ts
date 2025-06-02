// person-filter.component.ts
import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { MatSlideToggleModule, MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'person-filter',
  templateUrl: './person-filter.html',
  styleUrls: ['./person-filter.css'],
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
})
export class PersonFilterComponent implements OnInit {
  @ViewChild('astronautToggle') astronautToggle!: MatSlideToggle;

  @Output() filtersChanged = new EventEmitter<{ astronautsOnly: boolean; }>();

  ngOnInit(): void {
    this.emitFilters();

    this.astronautToggle.change.subscribe(() => this.emitFilters());
  }

  emitFilters() {
    this.filtersChanged.emit({
      astronautsOnly: this.astronautToggle.checked,
    });
  }
}