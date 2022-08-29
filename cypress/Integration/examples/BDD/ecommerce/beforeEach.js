beforeEach(function(){
    // runs onces before all tests run in block
    cy.fixture('example').then(function(data){
            this.data =data
    })
})