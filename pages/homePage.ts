import { Page, expect } from '@playwright/test';
import { HomePageLocators } from '../locators/homePageLocators';
import { getBaseUrl } from '../utils/webConfigUtils';

export class HomePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    const baseUrl = getBaseUrl();
    await this.page.goto(baseUrl);
  }

  async clickSignUpLogin() {
    const { signUpLink } = HomePageLocators;

    await this.page.waitForSelector(signUpLink, { state: 'visible' });
    await this.page.click(signUpLink);
  }

  async deleteAccount() {
    const { deleteAccountLink, continueButton } = HomePageLocators;

    await this.page.waitForSelector(deleteAccountLink, { state: 'visible' });
    await this.page.click(deleteAccountLink);
    await this.page.click(continueButton);
  }

  async verifyUserIsLoggedIn(name: string) {
    const { loggedInText } = HomePageLocators;

    await this.page.waitForSelector(loggedInText, { state: 'visible' });
    const extractedLoggedInText = await this.page
      .locator(loggedInText)
      .innerText();
    expect(extractedLoggedInText).toContain(`Logged in as ${name}`);
  }

  async clickProducts() {
    const { productsLink } = HomePageLocators;

    await this.page.waitForSelector(productsLink, { state: 'visible' });
    await this.page.click(productsLink);

    expect(this.page.url()).toMatch(/products$/);
  }

  async clickCart() {
    const { cartLink } = HomePageLocators;

    await this.page.waitForSelector(cartLink, { state: 'visible' });
    await this.page.click(cartLink);

    expect(this.page.url()).toMatch(/view_cart$/);
  }

  async clickTestCases() {
    const { testCasesLink } = HomePageLocators;

    await this.page.waitForSelector(testCasesLink, { state: 'visible' });
    await this.page.click(testCasesLink);

    expect(this.page.url()).toMatch(/test_cases$/);
  }

  async clickApiTesting() {
    const { apiTestingLink } = HomePageLocators;

    await this.page.waitForSelector(apiTestingLink, { state: 'visible' });
    await this.page.click(apiTestingLink);

    expect(this.page.url()).toMatch(/api_list$/);
  }

  async clickContactUs() {
    const { contactUsLink } = HomePageLocators;

    await this.page.waitForSelector(contactUsLink, { state: 'visible' });
    await this.page.click(contactUsLink);

    expect(this.page.url()).toMatch(/contact_us$/);
  }
}
