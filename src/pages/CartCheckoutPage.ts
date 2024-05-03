import { Page } from 'playwright';
import { BasePage } from './BasePage';
import { expect } from 'playwright/test';

export class CartCheckoutPage extends BasePage {    

    constructor(page: Page) {
        super(page);
    }
 
    public async checkExpectedElementsForPloomXAdvancedBlack(): Promise<void> {
        await expect(this.page.locator('#one-page-checkout a').filter({ hasText: 'Ploom X Advanced Black' })).toBeVisible();
        await expect(this.page.locator('#one-page-checkout').getByText('A unique Heated Tobacco')).toBeVisible();
        await expect(this.page.getByTestId('cartTotal').getByText('£29.00')).toBeVisible();
    }

}