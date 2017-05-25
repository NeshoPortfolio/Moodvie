import { MoodviePage } from './app.po';

describe('moodvie App', () => {
  let page: MoodviePage;

  beforeEach(() => {
    page = new MoodviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
