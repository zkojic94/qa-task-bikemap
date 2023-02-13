export default class WelcomePage {
    
    heroTitle(){
        return cy.get('h1');
    }

    //methods
    verifyPremiumFeaturesTitleIsDisplayed(premiumFeaturesTitle: string){
        this.heroTitle().contains(premiumFeaturesTitle).should('be.visible');
    }

    verifyWelcomeTitleIsDisplayed(welcomeTitle: string){
        this.heroTitle().contains(welcomeTitle).should('be.visible');
    }

    verifyPremiumWelcomePageUrl(premiumWelcomeUrl: string){
        cy.location('pathname').should('equal', premiumWelcomeUrl);
    }
}