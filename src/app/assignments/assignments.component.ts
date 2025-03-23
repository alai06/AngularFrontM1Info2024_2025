import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittedDirective } from '../shared/submitted.directive';
import { NotSubmittedDirective } from '../shared/not-submitted.directive';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AssignmentDetailComponent } from "./assignment-detail/assignment-detail.component";
import { MatListModule } from '@angular/material/list';

interface Assignment {
  name: string;
  dueDate: string;
  submitted: boolean;
}


@Component({
  selector: 'app-assignments',
  imports: [CommonModule, SubmittedDirective,
    NotSubmittedDirective, FormsModule, MatInputModule,
    MatButtonModule, MatFormFieldModule, MatDatepickerModule, AssignmentDetailComponent,MatListModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
  providers: [provideNativeDateAdapter()]
})
export class AssignmentsComponent {
  title = "This is the list of assignments :"
  // FOR THE FORM INPUT FIELDS
  assignmentName = "";
  assignmentDueDate!:Date;
  assignementSelectionne!:Assignment;

  assignments = [
    {
      name: "Assignment 1",
      dueDate: "2021-01-01",
      submitted: true
    },
    {
      name: "Assignment 2",
      dueDate: "2021-02-01",
      submitted: true
    },
    {
      name: "Assignment 3",
      dueDate: "2021-03-01",
      submitted: false
    }
  ];

  getColor(a: any) {
    return a.submitted ? 'lightgreen' : 'lightcoral';
  }
  assignmentClique(assignment:Assignment) {
   this.assignementSelectionne = assignment;
  }

  addAssignment() {
    console.log("New assignment added : ", this.assignmentName);
    console.log("Due date : ", this.assignmentDueDate);

    this.assignments.push({
      name: this.assignmentName,
      dueDate: this.assignmentDueDate.toString(),
      submitted: false
    });
  }
}
