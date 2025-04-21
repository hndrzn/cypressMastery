import RegistrationPage from '../../support/pageObjects/ParabankWebsite/fixturesData/registrationPage';
import LoginPage from '../../support/pageObjects/ParabankWebsite/fixturesData/loginPage';

describe('Parabank Website Registration and Log-in Test with Fixtures', () => {
  const registrationPage = new RegistrationPage();
  const loginPage = new LoginPage();

  it('Should successfully register with fixtures data', () => {
    cy.fixture('ParabankWebsite/parabankCredentials').then((credentials) => {
      registrationPage.visit();
      registrationPage.getLogo().should('be.visible');
      registrationPage.getForm().should('be.visible');
      registrationPage.fillRegistrationForm(credentials);
      registrationPage.submitRegistration();
      registrationPage.verifyRegistrationSuccess();
      cy.dynamicScreenshot('parabankRegistrationFixtures');
    });
  });

  it('Should successfully log-in with fixtures data', () => {
    cy.fixture('ParabankWebsite/parabankCredentials').then((credentials) => {
      loginPage.visit();
      loginPage.getLogo().should('be.visible');
      loginPage.fillLoginForm(credentials);
      loginPage.submitLogin();
      loginPage.verifyLoginSuccess(credentials);
      cy.dynamicScreenshot('parabankLoginFixtures');
    });
  });
});
