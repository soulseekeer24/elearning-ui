import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CourseInfo } from '../models/course-info';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlatziScrapperService {
  readonly platziUrl = environment.platziURL;
  readonly baseURL = 'https://platzi.com';
  readonly courseListSelector = 'body > section.SearcherMaterial > div > ul > a';
  readonly courseImgSelector = '.SearcherMaterial-itemImage > img';
  readonly courseTitleSelector = '.SearcherMaterial-itemName';

  constructor(private readonly client: HttpClient) { }

  public getPlatzi(tags: string[]) {
    return this.client.get(`${this.platziUrl}/search/?search=${tags.join('+')}&filter=course`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/xhtml+xml',
      }),
      observe: 'response',
      responseType: 'text'
    }).pipe(map(res => {
      const parsedHtml = this.parseBody(res.body);
      const result = this.buildCourseInfoArray(parsedHtml);
      return result;
    }));

  }

  private buildCourseInfoArray(parsedHtml: Document): CourseInfo[] {
    const result: CourseInfo[] = [];
    parsedHtml.querySelectorAll(this.courseListSelector)
      .forEach(courseElement => {
        result.push(this.buildCourseInfo(courseElement));
      });

    return result;
  }

  private buildCourseInfo(courseElement: Element): CourseInfo {
    return ({
      title: courseElement.querySelector(this.courseTitleSelector).innerHTML.trim(),
      imageURL: courseElement.querySelector(this.courseImgSelector).attributes.getNamedItem('src').value.trim(),
      url: `${this.baseURL}${courseElement.attributes.getNamedItem('href').value}`
    });
  }

  private parseBody(body: any): Document {
    const parser = new DOMParser();
    return parser.parseFromString(body, 'text/html');
  }


}
