import { CustomerServicePage } from './app.po';

describe('customer-service App', () => {
  let page: CustomerServicePage;

  beforeEach(() => {
    page = new CustomerServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
