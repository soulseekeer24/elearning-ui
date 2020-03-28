import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';



import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule

  ], exports: [
    CourseCardComponent
  ]
})
export class CourseCardModule { }
