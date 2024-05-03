import { Page } from 'playwright';
import { ShopPage } from '../pages/ShopPage';
import { Products } from '../enums/Products';

export class ShopPageStepDefs {
    private shopPage: ShopPage;

    constructor(page: Page) {
        this.shopPage = new ShopPage(page);
    }

    public async openProductPage(product: Products): Promise<void> {
        switch(product) {
            case Products.PLOOM_X_ADVANCED: 
                await this.shopPage.openPloomXAdvanced();
            break;
        }
    }

}