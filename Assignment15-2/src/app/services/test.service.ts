import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  getName(): string{
    return "Bazaar: An awesome e-learning marketplace"
  }

}
