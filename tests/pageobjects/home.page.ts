import { $ } from '@wdio/globals'
import cartPage from './cart.page.js';
import { browser } from '@wdio/globals';

class HomePage {
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public get inputSearch () {
        return $('input.search-keyword');
    }

    public get itemName () {
        return $('h4.product-name');
    }

    public get inputQuantity () {
        return $('input.quantity');
    }

    public get minusButtonItem() {
        return $('.decrement');
    }

    public get btnAddToCartItem() {
        return $('.product-action>button');
    }

    public get totalItemCart() {
        return $('//td[text()="Items"]/following-sibling::td/strong');
    }

    public get totalPriceCart() {
        return $('//td[text()="Price"]/following-sibling::td/strong');
    }

    public get cartIcon() {
        return $('a.cart-icon');
    }

    public get btnProceedToCheckout() {
        return $('//button[text()="PROCEED TO CHECKOUT"]');
    }

    public async search(item: string) {
        await this.inputSearch.setValue(item);
        await $(`//h4[contains(text(),'${item}')]`).waitForDisplayed();
        await $(`//h4[contains(text(),'${item}')]/following-sibling::*//input`).waitForDisplayed();
    }

    public async setQuantity(item:string, quantity: string) {
        await browser.pause(1500);
        await $(`//h4[contains(text(),'${item}')]/following-sibling::*//input`).clearValue();
        await browser.pause(1500);
        await $(`//h4[contains(text(),'${item}')]/following-sibling::*//input`).setValue(quantity);
    }

    public async tapMinusButton(item:string) {
        await $(`//h4[contains(text(),'${item}')]/following-sibling::*//*[@class="decrement"]`).click();
    }

    public async tapAddToCart(item:string) {
        await $(`//h4[contains(text(),'${item}')]/following-sibling::div[@class="product-action"]`).click();
    }

    public async tapCartIcon() {
        await this.cartIcon.click();
    }

    public async tapProceedToCheckout() {
        await this.btnProceedToCheckout.click();
    }

    public async actionToCheckout() {
        await this.tapCartIcon();
        await this.tapProceedToCheckout();
        await cartPage.btnPlaceOrder.waitForDisplayed();
    }
    
    public async searchSetQtyAddToCart(item:string, quantity:string) {
        await this.search(item);
        await browser.pause(1500);
        await this.setQuantity(item, quantity);
        await browser.pause(1500);
        await this.tapAddToCart(item);
        await browser.pause(1500);
    }
}

export default new HomePage();
