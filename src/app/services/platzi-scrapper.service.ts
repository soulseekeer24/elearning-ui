import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlatziScrapperService {

  constructor(private readonly client: HttpClient) { }



  public getPlatzi() {
    const headerst = new HttpHeaders({
      'Content-Type': 'application/xhtml+xml',
    });
    // this.client.get(`https://www.google.com`)
    this.client.get(`http://localhost:4200/search/?search=web&filter=course`,
      { headers: headerst, observe: 'response', responseType: 'text' })
      .subscribe((res) => {
        const result = [];
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(res.body, 'text/html');
        parsedHtml.querySelectorAll('body > section.SearcherMaterial > div > ul > a')
          .forEach(courseElement => {
            console.log(courseElement.querySelector('.SearcherMaterial-itemName').innerHTML);
            console.log(courseElement.querySelector('.SearcherMaterial-itemImage > img').attributes.getNamedItem('src'));
          });

        console.log();
      })
  }


}
