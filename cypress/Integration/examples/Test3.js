///  <reference types="Cypress" />
describe('My third Test Suite', function () {

    it('My third test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      
        // Check boxes handling using check() method
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('[type="checkbox"]').check(['option2','option3'])

        // Select - Static
        cy.get('select').select('Option2').should('have.value','option2')

        // select -dyanmic
        cy.get('#autocomplete').type('ind')

        //1.
     /*   cy.get('.ui-menu-item').each(($el, index, $list) => {
           
            var name = $el.find('.ui-menu-item-wrapper').text()
            if(name.includes('India'))
            {
                cy.wrap($el).contains('India').click({force:true})
            }


          }) */

          //2.
          cy.get('.ui-menu-item-wrapper').each( (dropDownlist, index) =>{
                if(dropDownlist.text()==='India')
                {
                    cy.wrap(dropDownlist).click({force:true})
                }

          })
          cy.get('#autocomplete').should('have.value','India')

          //visible
          cy.get('#displayed-text').should('be.visible')
          cy.get('#hide-textbox').click()
          cy.get('#displayed-text').should('not.be.visible')
          cy.get('#show-textbox').click()
          cy.get('#displayed-text').should('be.visible')

          // radio button
          cy.get('input[value="radio2"]').check().should('be.checked')
    })



})