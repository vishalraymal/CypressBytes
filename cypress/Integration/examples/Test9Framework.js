/// <reference types='Cypress' />

import HomePage from '../pageObjects/HomePage'
import ShopProduct from '../pageObjects/ShopProduct'
import CheckoutPage from '../pageObjects/CheckoutPage'
import AddressConfirmationPage from '../pageObjects/AddressConfirmationPage'


describe('My Test Suite', function(){

    before(function(){
        // runs onces before all tests run in block
        cy.fixture('example').then(function(data){
                this.data =data
        })
    })

    it('My First Test case', function(){
        const homePage= new HomePage()
        const shopProduct = new ShopProduct()
        const checkoutPage = new CheckoutPage()
        const addressPageObj = new AddressConfirmationPage()

        cy.visit('./')
        // cy.contains('div','Name').find('input[name="name"]').type(this.data.name)
        // cy.contains('div','Name').find('input[name="name"]').should('have.attr','minlength','2')
        // cy.contains('div','Email').find('input[name="email"]').type(this.data.email)
        // cy.get('select').select(this.data.gender)

        // cy.get('h4 input[name="name"]').should('have.value', this.data.name)
        // cy.get('#inlineRadio3').should('be.disabled')
        //  cy.contains('Shop').click()

        homePage.getName().type(this.data.name)
        homePage.getGender(this.data.gender)
        homePage.getTwoWayDataBindingData().should('have.value',this.data.name)
        homePage.getName().should('have.attr','minlength','2')
        homePage.getEnterprenerButton().should('be.disabled')
        homePage.getShopBtn().click()

       
       
        //1. for single element
         //cy.selectProduct(this.data.productName1) 

       //2. for multiple element use array

        this.data.productName.forEach(function(element) {
        cy.selectProduct(element)
      }) 
        

      shopProduct.getCheckoutBtn().click()

      var totalAmount=0
      cy.get('tr td:nth-child(4) strong').each((itemPrice, index)=>{
            const price = itemPrice.text()
            var totalAdditionPrice= price.split(" ")
            totalAdditionPrice= totalAdditionPrice[1].trim()
            cy.log("Addtion of prices are : "+totalAdditionPrice)
            totalAmount=Number(totalAmount)+Number(totalAdditionPrice)
            cy.log('Total amount:'+totalAmount)

      })
      cy.get('h3 strong').then( totalPrice =>{
            const tPrice= totalPrice.text()
            var finalSumPrice = tPrice.split(" ")
            finalSumPrice=finalSumPrice[1].trim()
            cy.log('Total amount as show on pageL:'+finalSumPrice)
            expect(Number(finalSumPrice)).to.equal(totalAmount)
      })

      checkoutPage.getFinalCheckoutBtn().click()
      addressPageObj.getChckBox().click({force:true})

      addressPageObj.getCountyName().type('Ind')
    //  cy.wait(10000)
      cy.get('div[class="suggestions"] a').each( (countryName, index) =>{
        if(countryName.text()==='India')
        {
            cy.wrap(countryName).click({force:true})
        }
      })  
      addressPageObj.getCountyName().should('have.value','India')
      addressPageObj.getPurchaseBtn().click() 
      addressPageObj.getSucessConfirmation().should('contain','Success')
     


  })




})