import { Page } from 'playwright';
import { DeviceProductPage } from '../pages/DeviceProductPage';

export class DeviceProductPageStepDefs {
    private deviceProductPage: DeviceProductPage;

    constructor(page: Page) {
        this.deviceProductPage = new DeviceProductPage(page);
    }

    public async addItemToTheCart(): Promise<void> {
        await this.deviceProductPage.addToTheCart()
    }

    public async checkAmount(amount: Number): Promise<void> {
        await this.deviceProductPage.checkAmount(amount);
    }

    public async openCheckoutPage(): Promise<void> {
        await this.deviceProductPage.clickYourCartButton();
        await this.deviceProductPage.clickCheckoutButton();
    }

}