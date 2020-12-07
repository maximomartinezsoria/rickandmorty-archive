describe('Structure and elements', () => {
  it('should load app', () => {
    cy.visit('/')
  })

  it('should have a title', () => {
    cy.contains('.Header__title', 'Rick and Morty Archive').should('have.length', 1)
  })

  it('should have a search input', () => {
    cy.get('.NameFilter input').should('have.length', 1)
  })

  it('should have a status select', () => {
    cy.get('.Filters__selectStatus').should('have.length', 1)
  })

  it('should have an order select', () => {
    cy.get('.OrderBy select').should('have.length', 1)
  })

  it('should have characterCards', () => {
    cy.get('.CharacterCard').its('length').should('be.gte', 0)
  })
})

describe('Searching, filtering, and ordering', () => {
  it('Searching by name', () => {
    cy.visit('/')

    cy.get('.CharacterCard').then((cards) => {
      const characterCardsOriginalLength = cards.length

      const nameQuery = 'Rick'
      cy.get('.NameFilter input').type(nameQuery)
      cy.wait(1000)
      cy.get('.CharacterCard').its('length').should('be.lt', characterCardsOriginalLength)

      cy.get('.CharacterCard__name').should('contain', nameQuery).its('length').should('be.gte', 1)
      cy.contains('.CharacterCard__name', 'Morty').should('not.exist')

      cy.contains('.AppliedFilters__button', nameQuery).should('exist').click()
      cy.get('.CharacterCard').should('have.length', characterCardsOriginalLength)
    })
  })

  it('Filtering by status', () => {
    cy.visit('/')

    cy.get('.CharacterCard').then((cards) => {
      const characterCardsOriginalLength = cards.length

      const statusQuery = 'Dead'
      cy.get('.Filters__selectStatus').select(statusQuery)
      cy.wait(1000)
      cy.get('.CharacterCard').its('length').should('be.lt', characterCardsOriginalLength)

      cy.get('.CharacterCard__status')
        .should('contain', statusQuery)
        .its('length')
        .should('be.gte', 1)
      cy.contains('.CharacterCard__status', 'Alive').should('not.exist')

      cy.contains('.AppliedFilters__button', statusQuery).should('exist').click()
      cy.get('.CharacterCard').should('have.length', characterCardsOriginalLength)
    })
  })

  it('Ordering', () => {
    cy.visit('/')

    cy.get('.CharacterCard').then((cards) => {
      cy.get('.CharacterCard__name').then((names) => {
        const characterCardsOriginalLength = cards.length
        const namesByPopular = names.map((index, name) => Cypress.$(name).text()).get()

        // Order by name
        cy.get('.OrderBy select').select('name')
        cy.wait(1000)
        cy.get('.CharacterCard').should('have.length', characterCardsOriginalLength)

        const namesShouldBeSortedByName = names.map((index, name) => Cypress.$(name).text()).get()
        const namesSortedByName = namesShouldBeSortedByName.sort()
        expect(namesShouldBeSortedByName, 'Cards should be sorted by name').to.deep.equal(
          namesSortedByName
        )

        // Order by popular
        cy.get('.OrderBy select').select('popular')
        cy.wait(1000)
        cy.get('.CharacterCard').should('have.length', characterCardsOriginalLength)

        const namesShouldBeSortedByPopular = names
          .map((index, name) => Cypress.$(name).text())
          .get()

        expect(namesShouldBeSortedByPopular, 'Cards should be sorted by name').to.deep.equal(
          namesByPopular
        )
      })
    })
  })
})
