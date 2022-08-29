/// <reference types='Cypress' />
/// <reference types='Cypress-iframe' />
import 'cypress-iframe'

describe('My iFrame demo suite', function(){

        it('My iFrame demo test case', ()=>{
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.frameLoaded('#courses-iframe')  // to get know cypress object about the iframe
            cy.iframe().contains('a[href="mentorship"]','Mentorship').click()
            cy.iframe().find('div[class="pricing-header"] div h1[class="pricing-title"]').should('have.length',2)


        })





})