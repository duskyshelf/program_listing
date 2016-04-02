describe('BBC Program List', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('A-Z Program List');
  });


  describe('Navigation', function() {

    it('loads on the correct homepage', function(){
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/a/1');
    });

    it('navigates to "B" filter correctly', function() {
      var bButton = element(by.id('filter-B'));
      bButton.click()
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/b/1');
    });

    it('navigates to "0-9" filter correctly', function() {
      var numButton = element(by.id('filter-0-9'));
      numButton.click()
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/0-9/1');
    });

  });

  describe('Pagination', function() {

    it('navigates to 2nd page correctly', function() {
      var page2Button = element(by.id('page-2'));
      page2Button.click()
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/a/2');
    });

    it('navigates to 3rd page correctly', function() {
      var page3Button = element(by.id('page-3'));
      page3Button.click()
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/a/3');
    });

    it('navigates to 2nd page correctly after changing letter filter', function() {
      var bButton = element(by.id('filter-B'));
      bButton.click()
      var page2Button = element(by.id('page-2'));
      page2Button.click()
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/b/2');
    });

  });


});