import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignUpLoginPage } from '../../pages/signUpLoginPage';
import { accountInformationData } from '../../data/web/signUp/accountInformationData';

test.describe('Sign Up and Login Page Tests', () => {
  let homePage: HomePage;
  let signUpLoginPage: SignUpLoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signUpLoginPage = new SignUpLoginPage(page);
    await homePage.navigate();
  });

  test('Verify user is able to create account, login and navigate the site', async () => {
    const {
      name,
      email,
      password,
      firstName,
      lastName,
      address,
      state,
      city,
      zipcode,
      mobileNumber,
    } = accountInformationData;
    await homePage.clickSignUpLogin();
    await signUpLoginPage.createNewUser(name, email);
    await signUpLoginPage.fillAccountInformation(
      password,
      firstName,
      lastName,
      address,
      state,
      city,
      zipcode,
      mobileNumber
    );
    await homePage.verifyUserIsLoggedIn(name);
    await homePage.clickProducts();
    await homePage.clickCart();
    await homePage.clickTestCases();
    await homePage.clickApiTesting();
    await homePage.clickContactUs();
    await homePage.deleteAccount();
  });
});
