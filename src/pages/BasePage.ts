import { Page } from 'playwright';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async confirmMajority(): Promise<void> {
    await this.page.getByText('Yes, discover more').click();
  }

  public async clickFooterAcceptButton(): Promise<void> {
    await this.page.getByRole('button', { name: 'GOT IT' }).click();
  }
  
}
