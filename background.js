chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON

    chrome.tabs.executeScript({file: "content_script.js"});

});