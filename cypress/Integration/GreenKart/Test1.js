///  <reference types="Cypress" />
describe('My First Test Suite', function () {

    it('My Fist test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(5000)

        // Assert logo and check LogoText
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand.greenLogo').then(function(logoname){
            cy.log(logoname.text())
        }) 

        //cy.get('.product').should('have.length',4)
        // cy.get('.product:visible').should('have.length',4)
        //without using visible keyword, using child parent
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        //  cy.get('.products').find('.product').eq(1).should('contain','Carrot - 1 Kg')
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        //1. Dyanmic
      /*  cy.get('.products').contains('.product', 'Carrot - 1 Kg').then(productIt => {
            cy.wrap(productIt).contains('ADD TO CART').click()
        }) */
        //2. using each syntax
        cy.get('.products').find('.product').each(($el, index, $list) => {
           
            const vegeeyText = $el.find('h4.product-name').text()
            if(vegeeyText.includes('Carrot'))
            {
                cy.wrap($el).contains('ADD TO CART').click()
            }


          })

        //3. click on cart logo button
        cy.get('.cart-icon').find('[alt="Cart"]').click()
        cy.wait(5000)
        cy.get('.cart-preview.active').find('.action-block').contains('PROCEED TO CHECKOUT').click()

      //  cy.get('cart-preview.active').find('div.action-block button').click()

      
    })



})