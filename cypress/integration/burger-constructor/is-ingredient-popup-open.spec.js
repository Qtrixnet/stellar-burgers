describe('ingredient popup open', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should open burger constructor page by default', () => {
    cy.contains('Соберите бургер');
  });

  it('should open and close popup by click', () => {
    cy.get('li').contains('Флюоресцентная булка R2-D3').click();
    cy.contains('Детали ингредиента');
    cy.get('#react-modals').find('header').find('button').click()
  });
});
