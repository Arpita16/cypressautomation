describe('TC02-Login Test',function(){


    it('TC02-Login Test',function(){
    
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123',{log:false});
        cy.get('[type="submit"]').click();


    })
    })