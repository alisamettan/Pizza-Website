describe('Navigation', () => {
  it('opens the main page', () => {
    cy.visit('/')
  })

  it('opens ordering page after clicking', () => {
    //arrange
    cy.visit('/');
    //act
    cy.get("[data-cy='nav-order']").click()
    //assert
    cy.visit('order')
  })
})

describe('hata mesajı gösterme', () => {
  it('boyut secimi yapılmazsa hata mesajı çıkıyor', () => {
   cy.visit('order');
    // cy.get("[name='boyut']").each(item=>{ 
      
    //   item.type(false)
    //   cy.contains('Lütfen bir boyut seçiniz!')
    // })
    cy.get("[type='radio']").check('kücük');
    cy.get("[type='radio']").check('orta');
    cy.get("[type='radio']").check('büyük');
    cy.contains('Lütfen bir boyut seçiniz!').should('not.exist')
   
  })
  it('kalınlık secimi yapılmazsa hata mesajı çıkıyor', () => {
    cy.visit('order');
     // cy.get("[name='boyut']").each(item=>{ 
       
     //   item.type(false)
     //   cy.contains('Lütfen bir boyut seçiniz!')
     // })
     cy.get('select').select('ince').should('have.value','ince')
     cy.get('select').select('orta').should('have.value','orta')
     cy.get('select').select('kalin').should('have.value','kalin')
     cy.contains('Lütfen bir kalınlık seçiniz!').should('not.exist')
    
   })
})

describe('10 tane malzeme seçildikten sonra checkbox alanını disabled yapma',()=>{
  it('en fazla 10 adet malzeme seçilebilir',()=>{
    cy.visit('order');

    cy.get('.checkbox').should('not.be.disabled');  
    cy.get('.checkbox:lt(10)').check({ force: true }).should('be.checked');
    cy.get('.checkbox:lt(12)').should('be.disabled');
    
  })
})

describe('Navigation', () => {
  it('opens the succes page', () => {
    cy.visit('/')
  })

  it('opens success page after clicking', () => {
    
    cy.visit('order');
    cy.get("[type='radio']").check('kücük');
    cy.get("[type='radio']").check('orta');
    cy.get("[type='radio']").check('büyük');
    cy.get('select').select('ince').should('have.value','ince')
     cy.get('select').select('orta').should('have.value','orta')
     cy.get('select').select('kalin').should('have.value','kalin')
    cy.get("[data-cy='nav-success']").click()
    
    cy.visit('success')
  })
})