import { Component,OnInit, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  standalone: true,
  imports:[MatCheckboxModule,MatCardModule,CommonModule],
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignementTransmis?: Assignment;
  constructor() { }
  ngOnInit(): void {
  }

}
