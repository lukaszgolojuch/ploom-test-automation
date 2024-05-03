import { Page } from 'playwright';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    private readonly SHOP_BUTTON_TEST_ID = 'headerItem-1';

    constructor(page: Page) {
        super(page);
    }

    public async clickShopButton(): Promise<void> {
        await this.page.getByTestId(this.SHOP_BUTTON_TEST_ID).click();
    }

}
