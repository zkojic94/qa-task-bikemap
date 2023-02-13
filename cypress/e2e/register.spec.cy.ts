import * as testData from '../fixtures/testData.json';
import WelcomePage from '../support/pageObjects/welcomePage';
import RegisterPage from '../support/pageObjects/registerPage';
import Navigation from '../support/pageObjects/navigation';

const onRegisterPage = new RegisterPage();
const onWelcomePage = new WelcomePage();
const onNavigation = new Navigation();

describe('register tests', () => {
   
    beforeEach('visit link', () => {
        cy.visit('/')
        cy.intercept("GET", "/user_location/", ()=>{}).as("getUserLocation");
    });

    it('register with correct credentials', () => {
        onNavigation.clickRegistrationButton();
        onRegisterPage.enterEmail(testData.registerEmail);
        onRegisterPage.clickSubmitButton();
        onRegisterPage.verifySignUpTitleIsDisplayed();
        onRegisterPage.verifyEmailAddressIsDisplayed(testData.registerEmail);
        onRegisterPage.enterUserName(testData.userFullName);
        onRegisterPage.enterPassword(testData.userPassword);
        onRegisterPage.tickOffTermsCheckbox();
        onRegisterPage.tickOffNewsletterCheckbox();
        onRegisterPage.clickSignUpButton();
        onWelcomePage.verifyPremiumWelcomePageUrl(testData.premiumWelcomeUrl);
        onWelcomePage.verifyPremiumFeaturesTitleIsDisplayed(testData.premiumFeaturesTitle);
    });
})