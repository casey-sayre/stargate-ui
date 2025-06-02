import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PersonDashboardComponent } from './features/dashboard/components/person-dashboard/person-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, PersonDashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'stargate-ui';
}
