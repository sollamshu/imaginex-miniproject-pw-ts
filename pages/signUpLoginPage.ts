import { Page } from '@playwright/test';
import { SignUpLoginPageLocators } from '../locators/signUpLoginPageLocators';

export class SignUpLoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createNewUser(username: string, email: string) {
    const { nameInput, emailInput, signUpButton } = SignUpLoginPageLocators;

    const randomNum = Math.floor(Math.random() * 10000);
    const randomNumWithFourDigits = randomNum.toString().padStart(4, '0');
    const [localPart, domain] = email.split('@');
    const newEmail = `${localPart}${randomNumWithFourDigits}@${domain}`;

    await this.page.waitForSelector(nameInput, { state: 'visible' });
    await this.page.fill(nameInput, username);
    await this.page.fill(emailInput, newEmail);
    await this.page.click(signUpButton);
  }

  async fillAccountInformation(
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    city: string,
    zipCode: string,
    mobileNumber: string
  ) {
    const {
      passwordInput,
      firstNameInput,
      lastNameInput,
      addressInput,
      stateInput,
      cityInput,
      zipCodeInput,
      mobileNumberInput,
      createAccountButton,
      continueButton,
    } = SignUpLoginPageLocators;

    await this.page.waitForSelector(passwordInput, { state: 'visible' });
    await this.page.fill(passwordInput, password);
    await this.page.fill(firstNameInput, firstName);
    await this.page.fill(lastNameInput, lastName);
    await this.page.fill(addressInput, address);
    await this.page.fill(stateInput, state);
    await this.page.fill(cityInput, city);
    await this.page.fill(zipCodeInput, zipCode);
    await this.page.fill(mobileNumberInput, mobileNumber);
    await this.page.click(createAccountButton);
    await this.page.click(continueButton);
  }
}
