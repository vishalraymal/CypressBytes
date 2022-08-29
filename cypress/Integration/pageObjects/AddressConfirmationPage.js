class AddressConfirmationPage
{
  getCountyName()
  {
    return cy.get('#country')
  }

  getPurchaseBtn()
  {
    return cy.get('[value="Purchase"]')
  }

  getSucessConfirmation()
  {
    return cy.contains('div','Success!')
  }

  getChckBox()
  {
    return cy.get('#checkbox2')
  }

}

export default AddressConfirmationPage