var assert = require('assert');

describe('Google\'s Search Functionality', function() {
  it('can find search results', function () {
    
    this.timeout(80000)
//     browser.url('http://localhost:80')
//     .pause(5000);
    browser
      .url('http://localhost:80')
      .url('https://www.google.com/ncr')
      .setValue('*[name="q"]','BrowserStack\n')
      .pause(5000);
    
    
//     assert(browser.getTitle().match(/BrowserStack - Google Search/i));
  });
});
