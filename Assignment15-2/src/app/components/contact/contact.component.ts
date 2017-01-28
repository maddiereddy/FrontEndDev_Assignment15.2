import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  serviceString: string;

  constructor(testService: TestService) {
    this.serviceString = testService.getName();
  }

  ngOnInit() {
  }

}
