import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'global-toolbar',
  templateUrl: 'global-toolbar.html',
  imports: [MatToolbarModule],
})
export class GlobalToolbar {}
