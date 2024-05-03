import { Page } from 'playwright';
import { MainPage } from '../pages/MainPage';

export class MainPageStepDefs {
    private mainPage: MainPage;

    constructor(page: Page) {
        this.mainPage = new MainPage(page);
    }

    public async closeAllPopups(): Promise<void> {
        await this.mainPage.clickFooterAcceptButton()
        await this.mainPage.confirmMajority();
    }

    public async openShop(): Promise<void> {
        await this.mainPage.clickShopButton();
    }

}