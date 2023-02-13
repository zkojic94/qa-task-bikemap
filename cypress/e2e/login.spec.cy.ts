import * as testData from '../fixtures/testData.json';
import WelcomePage from '../support/pageObjects/welcomePage';
import RegisterPage from '../support/pageObjects/registerPage';
import Navigation from '../support/pageObjects/navigation';

const onRegisterPage = new RegisterPage();
const onWelcomePage = new WelcomePage();
const onNavigation = new Navigation();

describe('login tests', () => {
   
    beforeEach('visit link', () => {
        cy.visit('/')
        cy.intercept("GET", "/user_location/", ()=>{}).as("getUserLocation");
    });

    it('login with correct credentials', () => {
        onNavigation.clickRegistrationButton();
        onRegisterPage.enterEmail(testData.loginEmail);
        onRegisterPage.clickSubmitButton();
        onRegisterPage.enterPassword(testData.userPassword);
        onRegisterPage.clickLogInButton();
        cy.wait('@getUserLocation');
        onWelcomePage.verifyWelcomeTitleIsDisplayed(`${testData.welcomeTitle} ${testData.userFullName}.`);
    });
})