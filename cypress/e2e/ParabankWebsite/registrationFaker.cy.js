import RegistrationPage from '../../support/pageObjects/ParabankWebsite/registrationPage';
import LoginPage from '../../support/pageObjects/ParabankWebsite/loginPage';

describe('Parabank Website Registration Test with Faker Data', () => {
  const registrationPage = new RegistrationPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.generateFakerData();
  });

  it('Should successfully register with faker data', () => {
    cy.fixture('ParabankWebsite/parabankFaker').then((fakerData) => {
      registrationPage.visit();
      registrationPage.verifyLogo();
      registrationPage.verifyForm();
      registrationPage.fillRegistrationForm(fakerData);
      registrationPage.submit();
      registrationPage.verifySuccessMessage();
      cy.dynamicScreenshot('parabankRegistrationFaker');
    });
  }); 

  it('Should successfully log-in with faker data', () => {
    cy.fixture('ParabankWebsite/parabankFaker').then((fakerData) => {
      loginPage.visit();
      loginPage.verifyLogo(); 
      loginPage.fillLoginForm(fakerData);
      loginPage.submitLogin();
      loginPage.verifyLoginSuccess(fakerData);
      cy.dynamicScreenshot('parabankLoginFaker');
    });
  });
});