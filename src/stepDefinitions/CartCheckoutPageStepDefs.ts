import { Page } from 'playwright';
import { CartCheckoutPage } from '../pages/CartCheckoutPage';
import { Products } from '../enums/Products';

export class CartCheckoutPageStepDefs {
    private cartCheckoutPage: CartCheckoutPage;

    constructor(page: Page) {
        this.cartCheckoutPage = new CartCheckoutPage(page);
    }

    public async checkExpectedElements(product: Products): Promise<void> {
        switch(product) {
            case Products.PLOOM_X_ADVANCED: 
                await this.cartCheckoutPage.checkExpectedElementsForPloomXAdvancedBlack();
            break;
        }
    }

}