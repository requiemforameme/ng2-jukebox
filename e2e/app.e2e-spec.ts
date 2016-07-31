import { Ng2JukeboxPage } from './app.po';

describe('ng2-jukebox App', function() {
  let page: Ng2JukeboxPage;

  beforeEach(() => {
    page = new Ng2JukeboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
