import { constants } from '../../../brucebookman/code/commentSoldProject/constants';

Feature('NewAccount');

Scenario('Positive account creation test', async ({ I }) => {

    
    let page_string : string = constants.REGISGTER + constants.DESTINATION + constants.ACCOUNT_PAGE

    await I.amOnPage('/' + page_string)
    await I.seeElement('Create Account')
    await I.seeElement('First Name')
    await I.fillField('input[id="customer-first-name"]', 'First Name')
    await I.fillField('input[id="customer-last-name"]', 'Last Name')
    await I.fillField('input[id="customer-email"]', 'email@email.com')
    await I.fillField('input[id="customer-password"]', 'password123X$')
    await I.click.button('Create Account')
  
    

    const welcomeBox: boolean = await I.isDisplayed('Welcome!')
    if (welcomeBox) {
        await I.see('Welcome!')
        await I.see('Email Address') 
        // await I.fillField(..)
        }

    }

});


