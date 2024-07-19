/// <reference types="Cypress"/>

import HomeElements from "../elements/home_elements";
import LoginElements from "../elements/login_elements";

const home_elements = new HomeElements;
const login_elements = new LoginElements;
const url = Cypress.config('baseUrl')

class LoginPage {

    acessHomePage() {
        cy.visit(url);
        cy, wait(3000)
        cy.get(home_elements.btnHideCookie()).click();
    }
    acessLoginPage() {
        cy.contains(home_elements.selectAccount()).click();
        cy.contains(home_elements.btnLogin()).click();
    }

    fillLoginInfo(email, password) {
        cy.get(login_elements.inputEmail()).type(email);
        cy.get(login_elements.inputPass()).type(password);
    }

    submitLogin() {
        cy.get(login_elements.btnLoginSubmit()).click();
    }
} export default LoginPage;