import { Component, OnInit } from '@angular/core';
import { PlatziScrapperService } from './services/platzi-scrapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elearning';


  constructor(private service: PlatziScrapperService) {
    console.log('test');
  }
  ngOnInit(): void {

    console.log('test');
    this.service.getPlatzi();
  }
}
