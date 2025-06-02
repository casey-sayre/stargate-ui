import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonDashboard } from './features/dashboard/components/person-dashboard/person-dashboard';
import { GlobalToolbar } from './global-toolbar/global-toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonDashboard, GlobalToolbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'stargate-ui';
}
