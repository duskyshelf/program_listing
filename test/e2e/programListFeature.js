describe('BBC Program List', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('BBC Program List');
  });


  describe('Navigation', function() {

    it('loads on the correct homepage', function(){
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/a/1');
    });

    // it('navigates between different letter filters correctly', function() {
    //   expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/a/1');
    // });

  });
});