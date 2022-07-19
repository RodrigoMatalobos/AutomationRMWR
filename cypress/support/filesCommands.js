// Realizar el signIn utilizando los archivos de fixture
Cypress.Commands.add('signUpUser', (filename) => {
    cy.fixture('pages/accountCreation').then((element) => {
        cy.readFile(`cypress/fixtures/${filename}.json`).then((data) => {
            cy.get(element.radioButton).contains(`${data.radioButton}`).click()
            cy.get(element.firstNameField).type(data.firstNameField)
            cy.get(element.lastNameField).type(data.lastNameField)
            cy.get(element.emailField).should('have.value', data.emailField)
            cy.get(element.passwordField).type(data.passwordField)
            cy.get(element.dayDropDown).select(data.dayDropDown)
            cy.get(element.monthDropDown).select(data.monthDropDown)
            cy.get(element.yearDropDown).select(data.yearDropDown)
            cy.get(element.addresFirstNameField).should('have.value', data.addresFirstNameField)
            cy.get(element.addressLastNameField).should('have.value', data.addressLastNameField)
            cy.get(element.companyField).type(data.companyField)
            cy.get(element.addressField).type(data.addressField)
            cy.get(element.addressLine2Field).type(data.addressLine2Field)
            cy.get(element.cityField).type(data.cityField)
            cy.get(element.stateDropDown).select(data.stateDropDown)
            cy.get(element.postCodeField).type(data.postCodeField)
            cy.get(element.countryDropDown).select(data.countryDropDown)
            cy.get(element.aditionalInformationField).type(data.aditionalInformationField)
            cy.get(element.homePhoneField).type(data.homePhoneField)
            cy.get(element.mobilePhoneField).type(data.mobilePhoneField)
            cy.get(element.aliasAddressField).clear().type(data.aliasAddressField)
            cy.get(element.registerButton).click()
        })
    });
})

// Cambiar info de un archivo especifico
Cypress.Commands.add('changeInformationTest', (path, information, fileName) => { 
    cy.readFile(`cypress/fixtures/${fileName}.json`).then((data) =>
    {
        data[path] = information
        cy.writeFile(`cypress/fixtures/${fileName}.json`, JSON.stringify(data))
    })
})

// Armar el dataSignIn.json File
Cypress.Commands.add('updateTestFile', (fileName, rButton, firstName, LastName, Password, day, month, year, company, address, address2, city, state, postCode, country, aInfo, homePhone, mobilePhone, alias) => { 
    cy.readFile(`cypress/fixtures/${fileName}.json`).then((data) =>
    {   
        data['radioButton'] = rButton
        data['firstNameField'] = firstName
        data['lastNameField'] = LastName
        data['passwordField'] = Password
        data['dayDropDown'] = day
        data['monthDropDown'] = month
        data['yearDropDown'] = year
        data['addresFirstNameField'] = firstName
        data['addressLastNameField'] = LastName
        data['companyField'] = company
        data['addressField'] = address
        data['addressLine2Field'] = address2
        data['cityField'] = city
        data['stateDropDown'] = state
        data['postCodeField'] = postCode
        data['countryDropDown'] = country
        data['aditionalInformationField'] = aInfo
        data['homePhoneField'] = homePhone
        data['mobilePhoneField'] = mobilePhone
        data['aliasAddressField'] = alias
        cy.writeFile(`cypress/fixtures/${fileName}.json`, JSON.stringify(data))
    })
})














