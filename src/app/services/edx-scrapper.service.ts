import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CourseInfo } from '../models/course-info';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EdxScrapperService {
  readonly edx = environment.platziURL;

  constructor(private readonly client: HttpClient) { }

  public getPlatzi(tags: string[]) {
    return this.client.post(`${this.edx}/edx`, { keywords: tags });
  }

}
