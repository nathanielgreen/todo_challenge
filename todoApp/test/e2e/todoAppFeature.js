describe('To Do Application', function() {

   beforeEach(function() {
    browser.get('http://localhost:1337/');
   });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
  });
});
