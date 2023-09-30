import { $ } from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import basePage from '../pageobjects/base.page.js';
import cartPage from '../pageobjects/cart.page.js';

import HomePage from '../pageobjects/home.page.js';

Given(/^I am on the GreenKart cart page with an add item (.+)$/, async (item) => {
    await basePage.actionToCartWithItem(item);
});

When(/^I fill a promo code with (\w+)$/, async (promoCode) => {
    await cartPage.insertPromo(promoCode);
});

When(/^click button apply promo$/, async () => {
    await cartPage.checkPromo();
});

When(/^validate the cart with total amount (.+), total after discount (.+)$/, async ( totalAmount, totalAmountAfterDiscount, dataTable) => {
    const respDataTable = dataTable.hashes();

    for (let i = 0; i < respDataTable.length; i++) {
        const item = respDataTable[i].item;
        const quantity = respDataTable[i].quantity;
        const eachPrice = respDataTable[i].eachPrice;
        const totalPrice = respDataTable[i].totalPrice;

        await expect(await $(`//p[contains(text(),'${item}')]`)).toHaveTextContaining(item);
        await expect(await $(`//p[contains(text(),'${item}')]/parent::*/following-sibling::*//*[@class="quantity"]`)).toHaveText(quantity);
        await expect(await $(`//p[contains(text(),'${item}')]/parent::*/following-sibling::*[2]//*[@class="amount"]`)).toHaveText(eachPrice);
        await expect(await $(`//p[contains(text(),'${item}')]/parent::*/following-sibling::*[3]//*[@class="amount"]`)).toHaveText(totalPrice);
    }

    await expect(await $('.totAmt')).toHaveText(totalAmount);
    await expect(await $('.discountAmt')).toHaveText(totalAmountAfterDiscount);
});

When(/^click to checkout$/, async () => {
    await cartPage.clickBtnPlaceOrder();
});

Then(/^I should see a warning for an invalid promo with (.+) message$/, async (message) => {
    await expect(cartPage.promoInfo).toHaveTextContaining(message);
});