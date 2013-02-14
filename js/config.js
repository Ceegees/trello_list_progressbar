gTrelloPluginType = 'chrome_extension';
var gTrelloPluginTracker = {
	_trackEvent : function(cat,action,label,value) {
		chrome.extension.sendMessage({
			type:"event",
			category: cat,
			action:action,
			label:label,
			value:value }, function(response) {
		});
	},
	_trackPageview : function(url) {
		chrome.extension.sendMessage({type:"page" , url :url }, function(response) {
		});
	}
};

