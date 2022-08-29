class HomePage
{

    getName()
    {
        return cy.contains('div','Name').find('input[name="name"]')
    }

    getTwoWayDataBindingData()
    {
        return cy.get('h4 input[name="name"]')
    }

    getGender()
    {
        return cy.get('select')
    }

    getEnterprenerButton()
    {
        return cy.get('#inlineRadio3')
    }
    
    getShopBtn()
    {
        return cy.contains('Shop')
    }

}

export default HomePage