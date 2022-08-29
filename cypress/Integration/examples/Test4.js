///  <reference types="Cypress" />
describe('My fourth Test Suite', function () {

    it('My fourth test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Alert for OK option
        cy.get('#alertbtn').click()

        //Alert for OK and CANCEL option
        cy.get('#confirmbtn').click()
      
        //window:alert
        cy.on('window:alert',(str)=>{
            // mocha
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
        })

         //window:confirm
         cy.on('window:confirm',(str)=>{
            // mocha
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
        })

        //New tab can be handled by removing target attribute using Jquery as below
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
        
    })



})