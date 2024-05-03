import { Page } from 'playwright';
import { BasePage } from './BasePage';

export class ShopPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async openPloomXAdvanced(): Promise<void> {
        await this.page.locator('[data-sku="ploom-x-advanced"] .aem-button__text').click();
    }

}