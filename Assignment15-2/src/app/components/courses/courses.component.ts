import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  serviceString: string;

  constructor(testService: TestService) {
    this.serviceString = testService.getName();
  }

  ngOnInit() {
  }

}
