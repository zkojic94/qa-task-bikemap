import * as testData from '../fixtures/testData.json';
import WelcomePage from '../support/pageObjects/welcomePage';
import RegisterPage from '../support/pageObjects/registerPage';
import Navigation from '../support/pageObjects/navigation';
import { faker } from '@faker-js/faker';

const onRegisterPage = new RegisterPage();
const onWelcomePage = new WelcomePage();
const onNavigation = new Navigation();

describe('register tests', () => {

    let userData = {
        randomFullName: faker.name.fullName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(10, false, /[A-z]/, '1'),
    }
   
    beforeEach('visit link', () => {
        cy.visit('/')
    });

    it('register with correct credentials', () => {
        onNavigation.clickRegistrationButton();
        onRegisterPage.enterEmail(userData.randomEmail);
        onRegisterPage.clickSubmitButton();
        onRegisterPage.verifySignUpTitleIsDisplayed();
        onRegisterPage.verifyEmailAddressIsDisplayed(userData.randomEmail);
        onRegisterPage.enterUserName(userData.randomFullName);
        onRegisterPage.enterPassword(userData.randomPassword);
        onRegisterPage.clickSignUpButton();
        onRegisterPage.tickOffTermsCheckbox();
        onRegisterPage.tickOffNewsletterCheckbox();
        onRegisterPage.clickSignUpButton();
        onWelcomePage.verifyPremiumWelcomePageUrl(testData.premiumWelcomeUrl);
        onWelcomePage.verifyPremiumFeaturesTitleIsDisplayed(testData.premiumFeaturesTitle);
    });
})