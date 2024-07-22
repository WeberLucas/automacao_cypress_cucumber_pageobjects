Feature: Login 
Funcionalidade para realizar variados login no sistema PHPTravels 

Scenario Ouline: "<cenario>"
Given eu acesse a pagina home da aplicação 
When eu inseir meu email "<email>" e minha senha "<senha>"
And clicar no botão entrar
Then tenho meu acesso "<>"

Examples:
cenario                 |         email          | senha               |mensagem |
Login com sucesso       | user@phptravels.com        | demouser          | com sucesso na aplicação
