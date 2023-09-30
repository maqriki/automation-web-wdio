import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals';
import cartPage from './cart.page.js';
import homePage from './home.page.js';

class BasePage{
    public open() {
        return browser.url('https://rahulshettyacademy.com/seleniumPractise/#/');
    }

    public async actionToCartWithItem(item:string) {
        await this.open();
        await homePage.search(item);
        await homePage.setQuantity(item,'2');
        await homePage.tapAddToCart(item);
        await homePage.actionToCheckout();
    }

    public async actionToCheckoutWithItem(item:string) {
        await this.actionToCartWithItem(item);
        await cartPage.clickBtnPlaceOrder();
    }
}

export default new BasePage();