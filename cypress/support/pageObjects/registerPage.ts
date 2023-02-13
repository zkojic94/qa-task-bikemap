export default class RegisterPage {

    emailInput(){
        return cy.get('#login > .form-field > #id_identity');
    }

    submitButton(){
        return cy.get('#login > .btn');
    }

    signUpTitle(){
        return cy.get('#modal-signup-title');
    }

    emailAddressInput(){
        return cy.get('#reg_id_email');
    }

    userNameInput(){
        return cy.get('#id_displayname');
    }

    passwordInput(){
        return cy.get('input[name="password"]');
    }

    termsCheckbox(){
        return cy.get('#id_accept_tos');
    }

    newsletterCheckbox(){
        return cy.get('#id_newsletter_subscription');
    }

    signUpButton(){
        return cy.get('#register > .btn');
    }

    logInButton(){
        return cy.get('#password-login > .btn');
    }

    //methods
    enterEmail(userEmail: string){
        this.emailInput().type(userEmail);
    }

    clickSubmitButton(){
        this.submitButton().click();
    }

    verifySignUpTitleIsDisplayed(){
        this.signUpTitle().contains('Welcome to Bikemap').should('be.visible');
    }

    verifyEmailAddressIsDisplayed(userEmail: string){
        this.emailAddressInput().should('have.value', userEmail);
    }

    enterUserName(userFullName: string){
        this.userNameInput().type(userFullName);
    }

    enterPassword(userPassword: string){
        this.passwordInput().type(userPassword);
    }

    tickOffTermsCheckbox(){
        this.termsCheckbox().check();
    }

    tickOffNewsletterCheckbox(){
        this.newsletterCheckbox().check();
    }

    clickSignUpButton(){
        this.signUpButton().click();
    }

    clickLogInButton(){
        this.logInButton().click();
    }
}