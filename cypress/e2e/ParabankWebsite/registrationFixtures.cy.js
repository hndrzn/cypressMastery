import RegistrationPage from '../../support/pageObjects/ParabankWebsite/registrationPage';
import LoginPage from '../../support/pageObjects/ParabankWebsite/loginPage';

describe('Parabank Website Registration and Log-in Test with Fixtures', () => {
  const registrationPage = new RegistrationPage();
  const loginPage = new LoginPage();

  it('Should successfully register with fixtures data', () => {
    cy.fixture('ParabankWebsite/parabankCredentials').then((credentials) => {
      registrationPage.visit();
      registrationPage.verifyLogo();
      registrationPage.verifyForm();
      registrationPage.fillRegistrationForm(credentials);
      registrationPage.submit();
      registrationPage.verifySuccessMessage();
      cy.dynamicScreenshot('parabankRegistrationFixtures');
    });
  });

  it('Should successfully log-in with fixtures data', () => {
    cy.fixture('ParabankWebsite/parabankCredentials').then((credentials) => {
      loginPage.visit();
      loginPage.verifyLogo().should('be.visible');
      loginPage.fillLoginForm(credentials);
      loginPage.submitLogin();
      loginPage.verifyLoginSuccess(credentials);
      cy.dynamicScreenshot('parabankLoginFixtures');
    });
  });
});