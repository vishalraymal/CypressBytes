///  <reference types="Cypress" />


describe('My Fifth Test Suite', function () {

    it('My Fifth test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('tr td:nth-child(2)').each((rowData, index)=>{
             const text = rowData.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then( coursePrice =>{
                    const price = coursePrice.text()
                    expect(price).to.equal('25')
                })
             }

        })

       
        
    })



})