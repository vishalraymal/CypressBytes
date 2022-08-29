///  <reference types="Cypress" />
describe('My Second Test Suite', function () {

    it('My second test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(500)
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
        cy.wait(500)
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        // Selecting country

       cy.get('.wrapperTwo').find('select').select('India')
       cy.get('.chkAgree').click()
       cy.contains('button','Proceed').click()
       

      
    })



})