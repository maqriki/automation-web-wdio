import { $ } from '@wdio/globals';

class CheckoutPage {
    public get btnCheckout () {
        return $('//button[text()="Proceed"]');
    }

    public get selectCountry() {
        return $('//select');
    }

    public get checkbox() {
        return $('.promoInfo');
    }

    public get errorAlert() {
        return $('.errorAlert');
    }

    public get checkboxAgree() {
        return $('.chkAgree');
    }

    public async chooseItem(country: string) {
        await $(`//select/option[.="${country}"]`).scrollIntoView({ block: "center", inline: "center" });
        await $(`//select/option[.="${country}"]`).click();
    }

    public async clickSelect() {
        await this.selectCountry.click();
    }

    public async tapCheckoutWarning() {
        await this.btnCheckout.click();
        await this.errorAlert.waitForDisplayed();
    }

    public async tapSelectCountry() {
        await this.selectCountry.click();
        await this.chooseItem('Indonesia');
    }

    public async tapCheckbox() {
        await this.checkboxAgree.click();
        console.log('ini console');
    }

    public async tapCheckout() {
        await this.btnCheckout.click();
    }
}

export default new CheckoutPage();
