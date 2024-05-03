import { test } from '@playwright/test';
import { PlaywrightCommons } from '../utils/PlaywrightCommons';
import { MainPageStepDefs } from '../stepDefinitions/MainPageStepDefs';
import { ShopPageStepDefs } from '../stepDefinitions/ShopPageStepDefs';
import { DeviceProductPageStepDefs } from '../stepDefinitions/DeviceProductStepDefs';
import { CartCheckoutPageStepDefs } from '../stepDefinitions/CartCheckoutPageStepDefs';
import { Products } from '../enums/Products';

test.describe('Purchasing Tests', () => {
    let playwrightCommons: PlaywrightCommons;
    let mainPageStepDefs: MainPageStepDefs;
    let shopPageStepDefs: ShopPageStepDefs;
    let deviceProductPageStepDefs: DeviceProductPageStepDefs
    let cartCheckoutPageStepDefs: CartCheckoutPageStepDefs
  
    test.beforeEach(async ({page}) => {
        playwrightCommons = new PlaywrightCommons(page);
        mainPageStepDefs = new MainPageStepDefs(page);
        shopPageStepDefs = new ShopPageStepDefs(page);
        deviceProductPageStepDefs = new DeviceProductPageStepDefs(page);
        cartCheckoutPageStepDefs = new CartCheckoutPageStepDefs(page);
        await playwrightCommons.openMainPage();
        await mainPageStepDefs.closeAllPopups();
    });
  
    test('Add heated tobacco product to the cart', async () => {
        await mainPageStepDefs.openShop();
        await shopPageStepDefs.openProductPage(Products.PLOOM_X_ADVANCED);
        await deviceProductPageStepDefs.addItemToTheCart();
        await deviceProductPageStepDefs.checkAmount(1);
        await deviceProductPageStepDefs.openCheckoutPage();
        await cartCheckoutPageStepDefs.checkExpectedElements(Products.PLOOM_X_ADVANCED);
    });

});
  