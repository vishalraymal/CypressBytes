///  <reference types="Cypress" />


describe('My sixth Test Suite', function () {

    it('My sixth test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //mouse hover event using cypress

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('contain','https://rahulshettyacademy.com/AutomationPractice/#top')
    })
})