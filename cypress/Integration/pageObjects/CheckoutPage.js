class CheckoutPage
{
  getFinalCheckoutBtn()
  {
    return cy.contains('button','Checkout')
  }


}

export default CheckoutPage
