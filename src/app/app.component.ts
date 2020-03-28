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

  courses: CourseInfo[] = [
    
  ];

  constructor(private service: PlatziScrapperService) {
  }
  ngOnInit(): void {

  }

  public search(searchString: string) {
    const tags = searchString.split(/\s+/);
    if (tags.length > 0) {
      this.clearComponentData();
      this.searchCourse(tags);
    }

  }
  clearComponentData() {
    this.courses = [];
  }
  searchCourse(tags: string[]) {
    this.service.getPlatzi(tags).subscribe((res: { courses: CourseInfo[] }) => {
      console.log(res);
      this.courses = this.courses.concat(res.courses);
      console.log(this.courses);
    });
  }
}
