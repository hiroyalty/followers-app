import { FollowersPage } from './app.po';

describe('followers App', () => {
  let page: FollowersPage;

  beforeEach(() => {
    page = new FollowersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
