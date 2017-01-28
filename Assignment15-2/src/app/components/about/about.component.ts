import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  serviceString: string;

  constructor(testService: TestService) {
    this.serviceString = testService.getName();
  }

  ngOnInit() {
  }

}
