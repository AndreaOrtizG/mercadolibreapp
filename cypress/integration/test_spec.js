describe('Mercado libre home search', () => {
    it ('Get Iphones', () => {
        cy.visit('http://localhost:3000/AndreaOrtizG/mercadolibreapp');

        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Iphone{enter}');
        cy.wait(2000)
        cy.contains('iPhone')
        cy.get('div .image:first').click();

        cy.url().should('include','/detail');
    })
   


})