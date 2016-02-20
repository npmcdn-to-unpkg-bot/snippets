var expect = chai.expect;

describe('twitter', function() {

	beforeEach(function() {
		this.twitter = new twitter();
	})

	it('is Instanciable', function() {
		expect(this.twitter.id).to.be.equal(19854);
	});

	it('should show count - mock', function() {
		// fixture	
		var $link = $('<a href="#" data-twitter="http://www.desjardins.com">Chargement</a>');
	
		// stub
		var stub = sinon.stub(this.twitter, 'getCount', function(url, callback) {
			return callback(2);
		})

		// test
		this.twitter.showCount($link);
		expect($link.text()).to.be.equal('2');
	});

});

it("multiply", function() {
	// Basic test
	expect(1 * 2).to.be.equal(2);
});

it("says hello", function() {
	// Test DOM
	var $div = $('<div></div>');
	$div.append("Hello");
	expect($div.text()).to.be.equal("Hello");
});