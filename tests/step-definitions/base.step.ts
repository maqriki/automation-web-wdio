import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
import basePage from '../pageobjects/base.page.js';

import base from '../pageobjects/home.page.js';

Given(/^I am on the GreenKart product page$/, async () => {
    await basePage.open();
    await browser.maximizeWindow();
});

Given(/^I am on the GreenKart checkout page with process checkout (.+)$/, async (item) => {
    await basePage.actionToCheckoutWithItem(item);
});