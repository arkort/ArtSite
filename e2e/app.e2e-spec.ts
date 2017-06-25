import { ArtSitePage } from './app.po';

describe('art-site App', () => {
  let page: ArtSitePage;

  beforeEach(() => {
    page = new ArtSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
