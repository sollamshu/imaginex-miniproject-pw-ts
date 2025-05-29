export const HomePageLocators = {
  signUpLink: '//a[contains(@href, "login")]',
  deleteAccountLink: '//a[contains(@href, "delete_account")]',
  continueButton: '//a[contains(@data-qa, "continue-button")]',
  loggedInText: '//i[contains(@class, "fa-user")]/parent::a',
  productsLink: '//a[contains(@href, "products")]',
  cartLink: '//a[contains(@href, "view_cart")]',
  testCasesLink: '//a[contains(@href, "test_cases")]',
  apiTestingLink: '//a[contains(@href, "api_list")]',
  contactUsLink: '//a[contains(@href, "contact_us")]',
} as const;
