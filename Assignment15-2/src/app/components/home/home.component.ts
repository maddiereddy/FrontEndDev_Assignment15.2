import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serviceString: string;

  constructor(testService: TestService) {
    this.serviceString = testService.getName();
  }

  ngOnInit() {
  }

}
