describe('Acessar Aplicação', () => {
  it('PASSO', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Verificação de Link no H1', () => {
  it('PASSO', () => {
    cy.visit('http://localhost:3000')
    cy.contains('AutoPlacas.Net').click()
  })
})

describe('Digitar Cidade 1 ', () => {
  it('PASSO', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type('Açailandia')
  })
})




describe('Limpar Pesquisa', () => {
  it('PASSO', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Botão Ver no Google', () => {
  it('PASSO', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Ver no Google').click()
  })
})

describe('Botão Cidades Atendidas', () => {
  it('PASSO', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Cidades Atendidas').click()
  })
})