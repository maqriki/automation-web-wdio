import { $ } from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import checkoutPage from '../pageobjects/checkout.page.js';

When(/^I click checkout without checking the terms and conditions$/, async () => {
    await checkoutPage.tapCheckoutWarning();
});

When(/^select a country and confirm the terms and conditions$/, async () => {
    await checkoutPage.tapSelectCountry();
    await checkoutPage.tapCheckbox();
});

When(/^click the Proceed button$/, async () => {
    await checkoutPage.tapCheckout();
});

Then(/^I should see a warning for required terms and conditions$/, async () => {
    await expect(await checkoutPage.errorAlert).toHaveText('Please accept Terms & Conditions - Required');
});

Then(/^I should receive the display text (.+)$/, async (message) => {
    await expect(await $('.wrapperTwo')).toHaveTextContaining(message);
});