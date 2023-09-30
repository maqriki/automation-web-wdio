import { $ } from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';

import HomePage from '../pageobjects/home.page.js';

When(/^I fill the search input with (\w+)$/, async (item) => {
    await HomePage.search(item);
});

When(/^set quantity item (.+) to (\w+)$/, async (item, quantity) => {
    await HomePage.setQuantity(item, quantity);
});

When(/^I click the minus button for the item (.+)$/, async (item) => {
    await HomePage.tapMinusButton(item);
});

When(/^click the Add to Cart button for an (\w+)$/, async (item) => {
    await HomePage.tapAddToCart(item);
});

When(/^click the cart button and process the cart page$/, async () => {
    await homePage.actionToCheckout();
});

When(/^I search, change the quantity, and add an item to the cart$/, async (dataTable) => {
    const respDataTable = dataTable.hashes();

    for (let i = 0; i < respDataTable.length; i++) {
        const item = respDataTable[i].item;
        const quantity = respDataTable[i].quantity;

        await homePage.searchSetQtyAddToCart(item, quantity);
    }
});

Then(/^I should see a item (.+)$/, async (item) => {
    await expect(await $(`//h4[contains(text(),'${item}')]`)).toHaveTextContaining(item);
});

Then(/^the quantity of the item (.+) should not change$/, async (item) => {
    await expect(await $(`//*[contains(text(),'${item}')]/following-sibling::*//input`)).toHaveValue('1')
});

Then(/^the cart should display the updated total item with (\w+) and total price with (\w+)$/, async (totalItem, totalPrice) => {
    await expect(await HomePage.totalItemCart).toHaveText(totalItem);
    await expect(await HomePage.totalPriceCart).toHaveText(totalPrice);
});

