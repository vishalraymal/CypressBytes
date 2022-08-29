/// <reference types='Cypress' />


describe('My seventh suite', function(){

    it('My seventh test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Fetch href attribute
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })
})