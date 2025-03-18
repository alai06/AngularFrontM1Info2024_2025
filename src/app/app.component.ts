import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {AssignmentsComponent} from './assignments/assignments.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [MatButtonModule,RouterOutlet, MatDividerModule, MatIconModule, AssignmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment app';
}
