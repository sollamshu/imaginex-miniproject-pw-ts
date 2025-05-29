export const SignUpLoginPageLocators = {
  nameInput: '//input[contains(@data-qa, "signup-name")]',
  emailInput: '//input[contains(@data-qa, "signup-email")]',
  signUpButton: '//button[contains(@data-qa, "signup-button")]',
  passwordInput: '//input[contains(@data-qa, "password")]',
  firstNameInput: '//input[contains(@data-qa, "first_name")]',
  lastNameInput: '//input[contains(@data-qa, "last_name")]',
  addressInput: '//input[contains(@data-qa, "address")]',
  countryDropdown: '//select[contains(@data-qa, "country")]',
  countryOption: (country: string) =>
    `//option[contains(@value, "${country}")]`,
  stateInput: '//input[contains(@data-qa, "state")]',
  cityInput: '//input[contains(@data-qa, "city")]',
  zipCodeInput: '//input[contains(@data-qa, "zipcode")]',
  mobileNumberInput: '//input[contains(@data-qa, "mobile_number")]',
  createAccountButton: '//button[contains(@data-qa, "create-account")]',
  continueButton: '//a[contains(@data-qa, "continue-button")]'
} as const;
