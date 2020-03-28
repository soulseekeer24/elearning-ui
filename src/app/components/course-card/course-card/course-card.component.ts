import { Component, OnInit, Input } from '@angular/core';
import { CourseInfo } from 'src/app/models/course-info';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course: CourseInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
