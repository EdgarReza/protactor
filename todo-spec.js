describe('Testing Angular', function() {

    beforeAll(() => {

    browser.get('http://localhost:4200/startertemplateform');
    browser.driver.manage().window().maximize();

});

    
  it('Starter Template Form', function() {
  
    element(by.name('firstName')).clear().then(function() {
    element(by.name('firstName')).sendKeys('Juan Lopez');
    element(by.className('btn btn-default')).click();
    browser.driver.sleep(2000);
   
    
});
     });

    it('Starter Reactive Form', function() {
  
    element(by.partialLinkText('Starter Reactive Form')).click();
    element(by.className('form-control ng-untouched ng-pristine ng-valid')).clear().then(function() {
    element(by.css('input[formcontrolName=firstName]')).sendKeys('Edgar Reza');
    element(by.className('btn btn-default')).click();    
    browser.driver.sleep(3000);
   
    
});
});

    it('Basic Template Form', function() {
  
     element(by.partialLinkText('Basic Template Form')).click();
     element(by.name('name')).sendKeys('Benito Juarez');
     element(by.name('alterEgo')).sendKeys('Santa Fe');
     element(by.name('power')).click();
     browser.driver.sleep(1000);
     element(by.cssContainingText('option', 'Really Smart')).click();
     browser.driver.sleep(1000);
     element(by.className('btn btn-defaul')).click(); 
     browser.driver.sleep(2000);
    
});


    //element(by.name('firstName')).sendKeys('hola');
   // element(by.css('[value="add"]')).click();
  
 
});
