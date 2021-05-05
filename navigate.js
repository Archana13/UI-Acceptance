module.exports = {
  "navigate method": function (browser) {

    //navigate to the home page
    browser.url("https://www.thezebra.com");

    browser.assert.elementPresent('body > div:nth-child(5) > div > h1')

    //Typing in the zip code 
    const xpathSelector = ' //*[@id="59fe5cbf-2297-47d4-8a15-f96f51099343"]'

    browser.useXpath()
    browser.pause(2 * 1000);
    browser.setValue(xpathSelector, "78749")

    //Click on the "Get my quites" CTA
    browser.useXpath().click("/html/body/div[3]/div/div/div/div/form/div[2]/div[1]/div[2]/button")

    //navigate to the start page

    //question 1
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[1]/div/div[2]/div/div[1]/label/div/div[1]')
    browser.pause(3 * 1000);

    //question 2
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[2]/div/div[2]/label[1]/div/div[2]')
    browser.pause(5 * 1000);

    //question 3
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[3]/div/div[2]/label[1]/div')
    browser.pause(5 * 1000);

    //Click on "Save and Continue" CTA
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[4]/div/div/a/span[1]')
    browser.pause(5 * 1000);

    //Filling in the details

    //address, city, first name , last name and birthdate
    browser.useXpath().click('//*[@id="garaging_address"]')
    browser.keys('4701 Staggerbrush Road')
    browser.pause(5 * 1000);

    browser.useXpath().click('//*[@id="first_name-0"]')

    browser.useXpath().click('//*[@id="city"]')
    browser.keys('Austin')
    browser.pause(5 * 1000);

    browser.useXpath().click('//*[@id="first_name-0"]')
    browser.keys('First')
    browser.pause(5 * 1000);

    browser.useXpath().click('//*[@id="last_name-0"]')
    browser.keys('Tester')
    browser.pause(5 * 1000);

    browser.useXpath().click('//*[@id="date_of_birth-0"]')
    browser.keys('08/22/1990')
    browser.pause(10 * 1000);

    //Click on the "Save and Continue" CTA
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[3]/div/div[2]/a')
    browser.pause(8 * 1000);

    //Adding your Vehicle page

    //Year, Make Model and Trim of your vehicle

    browser.useXpath().click('//*[@id="dropdown-vehicle-year-0"]/div/div[1]')
    browser.keys('2010').keys('\uE007')
    browser.pause(2 * 1000);

    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[1]/div[1]/div/div[2]/div[3]')
    browser.pause(2 * 1000);

    browser.useXpath().click('//*[@id="dropdown-vehicle-make-0"]/div/div[1]/div[1]')
    browser.keys('Honda').keys('\uE007')
    browser.pause(2 * 1000);


    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[1]/div[1]/div/div[2]/div[4]')
    browser.pause(2 * 1000);

    browser.useXpath().click('//*[@id="dropdown-vehicle-model-0"]/div/div[1]')
    browser.keys('Civic').keys('\uE007')
    browser.pause(2 * 1000);

    browser.useXpath().click('//*[@id="dropdown-vehicle-submodel-0"]/div/div[1]')
    browser.keys('EX 2DR COUPE 5M').keys('\uE007')
    browser.pause(2 * 1000);

    //save and continue CTA
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[2]/div/div[2]/a/span[1]')
    browser.pause(5 * 1000);

    //Tell us about your vehicle page

    //question 1
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[2]/div/div[2]/label[1]/div')
    browser.pause(3 * 1000);

    //question 2
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[3]/div/div[2]/label[1]/div')
    browser.pause(3 * 1000);

    //question 3
    browser.useXpath().click('//*[@id="miles-0"]')
    browser.keys('10').keys('\uE007')
    browser.pause(2 * 1000);

    browser.useXpath().click('//*[@id="dropdown-mileagePeriod-0"]/div/div[1]').keys('\uE007')


    //save and continue CTA

    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[5]/div/div[2]/a')
    browser.pause(5 * 1000);

    //Drivers page

    //question 1
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[1]/div/div[2]/div/div[2]/label/div')
    browser.pause(2 * 1000);

    //question 2
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[2]/div/div[2]/label[1]/div')
    browser.pause(2 * 1000);

    //question 3
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[3]/div/div[2]/label[2]/div/div[2]')
    browser.pause(2 * 1000);

    //question 4
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[4]/div/div[2]/label[2]/div')
    browser.pause(2 * 1000);

    //question 5
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[5]/div/div[2]/label[1]/div/div[2]')
    browser.pause(2 * 1000);

    //question 6
    browser.useXpath().click('//*[@id="dropdown-current_carrier-0"]/div/div[1]')
    browser.keys('Geico').keys('\uE007')
    browser.pause(2 * 1000);

    //question 7
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[7]/div/div[2]/label[2]/div')
    browser.pause(2 * 1000);

    //question 8
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[8]/div/div[2]/div/div[2]/label/div')
    browser.pause(2 * 1000);

    //question 9
    browser.useXpath().click('//*[@id="email-0"]')
    browser.keys('abc@test.com').keys('\uE007')
    browser.pause(2 * 1000);

    //question 10
    browser.useXpath().click('//*[@id="interested-in-account-group"]/div/div/div[2]/div/div[2]/label/div')
    browser.pause(2 * 1000);

    //question 11
    browser.useXpath().click('//*[@id="dropdown-referral_source"]/div/div[1]')
    browser.keys('Facebook ad').keys('\uE007')
    browser.pause(2 * 1000);

    //question 12
    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[13]/div/div[2]/div/div[2]/label/div')
    browser.pause(2 * 1000);

    //Click on "Show my quotes" CTA

    browser.useXpath().click('//*[@id="questions-page"]/div/div[2]/form/div[14]/div/div[2]/button/span[1]')
    browser.pause(60 * 1000);

    browser.end()

  },
};