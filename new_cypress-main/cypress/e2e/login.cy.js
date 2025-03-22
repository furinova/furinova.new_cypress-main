describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');//зашли на сайт 
          });

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
           });


    it('Верный логин и верный пароль', function () {
         

         cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин 
         cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
         cy.get('#loginButton').click();//нажала войти 

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю,что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');// текст виден пользователю
         
     })
 

     
    it('Верный логин и неверный пароль', function () {
        

        cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин 
        cy.get('#pass').type('iLoveqastudio7');//ввели неверный пароль
        cy.get('#loginButton').click();//нажала войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        
    })


    it('Неверный логин и верный пароль', function () {
        

        cy.get('#mail').type('german1@dolnikov.ru');//ввели неверный логин 
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажала войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
    })
        

    it('Проверка,что в логине есть @', function () {
        

        cy.get('#mail').type('germandolnikov.ru');//ввели логин без @
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажала войти 

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        
    })

    it('Проверка восстановления пароля', function () {
        

        
        cy.get('#forgotEmailButton').click();//нажала восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');//ввели почту для восстановления
        cy.get('#restoreEmailButton').click();//нажала кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпадения текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        

        cy.get('#mail').type('GerMan@Dolnikov.ru');//ввели верный логин с использованием строчных и заглавных символов 
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажала войти 

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        
    })




 })       


 //найти поле логин и вести правильный логин +
 //найти поле пароль и ввести правильный пароль +
 //найти кнопку войти и Нажать на нее +
 //проверить, что авторизация прошла успешно +
 //Проверить нужный текст и наличие кнопки крестик +