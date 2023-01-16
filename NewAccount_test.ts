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
  
    /* 
    
    below i decided to stop coding
    there is a usability bug here and it would not make sense to test further 
    until I was able to file a bug and or have a conversation about the design.

    Bugs:
    -  The "Welcome" modal has a field for email address, but the account creation form already had that
       Why have the field filled with an email the user already supplied?
    -  The confirm button is odd.  Although the user could avoid email spam by unchecking the 
      "Email Notifications" checkbox, it is unclear as to the purpose of this modal if as a user I do not
      want notifications the button reads "Confirm".  There really should be a cancel button
    - There is no text indicating how the phone number will be used.  Am I going to get SMS spam?  
    */

    const welcomeBox: boolean = await I.isDisplayed('Welcome!')
    if (welcomeBox) {
        await I.see('Welcome!')
        await I.see('Email Address') 
        // await I.fillField(..)
        }

    }

});


