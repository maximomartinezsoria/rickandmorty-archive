describe('Rick and Morty Archive', () => {
  it('should load app', () => {
    cy.visit('/')
  })

  it('should have a title', () => {
    cy.contains('.Header__title', 'Rick and Morty Archive')
  })

  it('should have a search input', () => {
    cy.get('.NameFilter input')
  })

  it('should have a status select', () => {
    cy.get('.Filters__selectStatus')
  })

  it('should have an order select', () => {
    cy.get('.OrderBy select')
  })
})
