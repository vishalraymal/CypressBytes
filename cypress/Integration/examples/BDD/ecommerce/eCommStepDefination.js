import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../pageObjects/HomePage'
import ShopProduct from '../../../pageObjects/ShopProduct'
import CheckoutPage from '../../../pageObjects/CheckoutPage'
import AddressConfirmationPage from '../../../pageObjects/AddressConfirmationPage'
const homePage= new HomePage()
const shopProduct = new ShopProduct()
const checkoutPage = new CheckoutPage()
const addressPageObj = new AddressConfirmationPage()
let name
Given('I open eCommerce page', ()=>
{
    cy.visit('./')
})
When('I add items to cart',function(){
    homePage.getShopBtn().click()

})
And('Validate the total prices', function()
{
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
})

Then('Select country and submit and verify SUCCESS message',()=>{
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

When('I fill the form details',function(dataTable){
    name= dataTable.rawTable[1][0]
    homePage.getName().type(name)
    homePage.getGender(dataTable.rawTable[1][1])
    

})

Then('validate the form behaviour',()=>{
    homePage.getTwoWayDataBindingData().should('have.value',name)
    homePage.getName().should('have.attr','minlength','2')
    homePage.getEnterprenerButton().should('be.disabled')
})

And('Select shop page',()=>{
    homePage.getShopBtn().click()
})