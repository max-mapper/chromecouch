// thanks for these codez, @sbisbee! https://github.com/sbisbee/futonfinder

var STORAGE_KEYS = {
  ALREADY_RAN: 'futonFinderWashere',
  FUTON_URL: 'futonURL'
};

if(localStorage.getItem(STORAGE_KEYS.ALREADY_RAN) !== 'true' && !Boolean(window.location.origin.match(/:5984/))) {
  localStorage.setItem(STORAGE_KEYS.ALREADY_RAN, true);

  var url = 'http://' + window.location.hostname + ':5984';

  chrome.extension.sendRequest({'options': { futonFinder: true, url: url }}, function(resp) {
    if (resp.ok) {
      if (resp.data.couchdb) {
        localStorage.setItem(STORAGE_KEYS.FUTON_URL, url);
      }
    }
  });
  
}
