describe ('Suita 1' , () => {
    it('Test 1' , () =>{
       cy.visit('https://www.google.com/');
       cy.get('#L2AGLb').click()  
       cy.get('.gLFyf').type('vlog de it').type('{enter}')

       cy.get('#result-stats').should('exist')
    })
    
} )