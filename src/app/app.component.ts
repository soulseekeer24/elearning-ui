import { Component, OnInit } from '@angular/core';
import { PlatziScrapperService } from './services/platzi-scrapper.service';
import { CourseInfo } from './models/course-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elearning';

  courses: CourseInfo[] = [];

  constructor(private service: PlatziScrapperService) {
  }
  ngOnInit(): void {
    this.service.getPlatzi(['web']).subscribe((res: CourseInfo[]) => this.courses = this.courses.concat(res));
  }
}
