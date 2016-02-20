var twitter = (function() {

	function twitter() {}

	twitter.prototype.id = 19854;
	
	twitter.prototype.showCount = function($elements) {
		var self = this;
		$elements.each(function() {
			$this = $(this);
			self.getCount($this.data('twitter'), function(count) {
				$this.text(count);
			});
		})
	}
	
	twitter.prototype.getCount = function (url, callback) {
		$.getJSON(
			'http://urls.api.twitter.com'+
			'/1/urls/'+
			'count.json?callback?url=' + 
			url, 
			function(result) {
				callback(result.count);	
		})
	}

	return twitter;

})();
