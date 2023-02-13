export default class Navigation {
    
    registrationButton(){
        return cy.get('.main-navigation > .btn-primary');
    }

    //methods
    clickRegistrationButton(){
        this.registrationButton().click();
    }
}