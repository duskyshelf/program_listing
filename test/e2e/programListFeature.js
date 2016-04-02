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
      var bButton = element(by.id('filter-0-9'));
      bButton.click()
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/0-9/1');
    });

  });
});