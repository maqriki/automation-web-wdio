import { $ } from '@wdio/globals';
import checkoutPage from './checkout.page.js';

class CartPage {
    public get btnPlaceOrder () {
        return $('//button[text()="Place Order"]');
    }

    public get btncheckPromo() {
        return $('.promoBtn');
    }

    public get inputPromo () {
        return $('.promoCode');
    }

    public get promoInfo() {
        return $('.promoInfo');
    }

    public async insertPromo (promo:string) {
        await this.inputPromo.setValue(promo);
    }

    public async checkPromo() {
        await this.btncheckPromo.click();
        await this.promoInfo.waitForDisplayed();
    }

    public async clickBtnPlaceOrder() {
        await this.btnPlaceOrder.click();
        await checkoutPage.btnCheckout.waitForDisplayed();
    }
}

export default new CartPage();
