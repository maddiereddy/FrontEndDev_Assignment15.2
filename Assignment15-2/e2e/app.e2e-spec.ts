import { Assignment152Page } from './app.po';

describe('assignment15-2 App', function() {
  let page: Assignment152Page;

  beforeEach(() => {
    page = new Assignment152Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
