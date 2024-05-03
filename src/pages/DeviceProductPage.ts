import { Page } from 'playwright';
import { BasePage } from './BasePage';
import { expect } from 'playwright/test';

export class DeviceProductPage extends BasePage {    
    private readonly ADD_TO_CART_BUTTON_TEST_ID = 'pdpAddToProduct';
    private readonly YOUR_CART_BUTTON_TEXT = 'Your Cart';
    private readonly CHECKOUT_BUTTON_TEST_ID = 'miniCartCheckoutButton';

    constructor(page: Page) {
        super(page);
    }

    public async addToTheCart(): Promise<void> {
        await this.page.getByTestId(this.ADD_TO_CART_BUTTON_TEST_ID).click();
    }

    public async checkAmount(amount: Number): Promise<void> {
        await expect(this.page.getByText(amount + ' Item')).toBeVisible()
    }

    public async clickYourCartButton(): Promise<void> {
        await this.page.getByText(this.YOUR_CART_BUTTON_TEXT, { exact: true }).click();
    }

    public async clickCheckoutButton(): Promise<void> {
        await this.page.getByTestId(this.CHECKOUT_BUTTON_TEST_ID).click();
    }
 
}