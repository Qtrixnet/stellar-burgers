describe('create order', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should open burger constructor page by default', () => {
    cy.contains('Соберите бургер');
  });

  it('should add ingredients and click order button', () => {
    cy.get('li').contains('Флюоресцентная булка R2-D3').rightclick();
    cy.get('li').contains('Краторная булка N-200i').rightclick();
    cy.get('li').contains('Соус Spicy-X').rightclick();
    cy.get('li').contains('Мясо бессмертных моллюсков Protostomia').rightclick();
    cy.get('li').contains('Кристаллы марсианских альфа-сахаридов').rightclick();
    cy.get('li').contains('Кристаллы марсианских альфа-сахаридов').rightclick();
    cy.get('li').contains('Плоды Фалленианского дерева').rightclick();
    cy.get('button').contains('Оформить заказ').click();
  });

  it('should open login page and login', () => {
    cy.contains('Вход');
    cy.get('form').within(() => {
      cy.get('input:first').should('have.attr', 'name', 'e-mail').type('qtrixnet-test@yandex.ru');
      cy.get('input:last').should('have.attr', 'name', 'password').type('12345678');
    })
    cy.get('button').contains('Войти').click();
  })
  

  it('should return to burger-constructor and click order create button', () => {
    cy.contains('Соберите бургер');
    cy.get('button').contains('Оформить заказ').click();
  });

  it('should close order popup', () => {
    cy.contains('идентификатор заказа');
    cy.get('#react-modals').find('header').find('button').click()
  });
}); 