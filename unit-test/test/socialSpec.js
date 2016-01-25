var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

require('sinon-as-promised');


var Social = require('../lib/social');

describe("Social", function() {

	var url = "http://www.desjardins.com";

	it("should have twitter url", function() {
		expect(Social).to.have.property("twitter_url");
	})

	it("should have facebook_url", function() {
		expect(Social).to.have.property("facebook_url");
	})

	describe("#getTwitterCount", function() {
		
		afterEach(function() {
			if (Social.callAPI.restore) {
				Social.callAPI.restore();
			}
		})

		it("should be a function", function() {
			expect(Social.getTwitterCount).to.be.a("function");
		});

		it("should call callAPI", function() {
			// Create a spy on callAPI method
			sinon.spy(Social, "callAPI");
			Social.getTwitterCount(url);
			expect(Social.callAPI.calledOnce).to.be.true;
			expect(Social.callAPI.withArgs(Social.twitter_url + url).calledOnce).to.be.true;
			// retabissement de callAPI apres modification pour executer le stub ensuite
			Social.callAPI.restore();
		});

		it("should return count", function(done) {
			var stub = sinon.stub(Social, 'callAPI');
			var Promise = require('promise');

			// remplace la methode callAPI, par un stub
			// Coupe la fonction callAPI, permet d'avoir un result previsible
			
			// utilisation avec une promise
			/*
			stub.returns(new Promise(function(resolve, reject) {
				resolve({count: 3});
			}))
			*/

			// pour renvoyer un stub particulier avec sinon-as-promised
			stub.resolves({count:3});

			// utilisation avec une promise
			/*
			Social.getTwitterCount(url).then(function(count){
				expect(count).to.be.equal(3);
				done();
			})
			*/

			// on utilise chai as promise {to.eventually.be.equal et notify}
			expect(Social.getTwitterCount(url)).to.eventually.be.equal(3).notify(done);
		
			// Test enchainement de plusieurs tests
			/*
			return Promise.all([
				expect(Social.getTwitterCount(url)).to.eventually.be.equal(3),
				expect(Social.getTwitterCount(url)).to.eventually.be.equal(3),
				expect(Social.getTwitterCount(url)).to.eventually.be.equal(3),
				expect(Social.getTwitterCount(url)).to.eventually.be.equal(3)
			])
			*/

		});

	})


	describe('#getFacebookCount', function() {

		it('should return shares', function(done) {
			var mock = sinon.mock(Social);
			// callAPI soit appelé une fois avec les arguments x
			mock.expects('callAPI')
				.once()
				.withArgs(Social.facebook_url + url)
				.resolves({shares: 10});
			//mock.expects('callAPI').once().withArgs(Social.facebook_url + url);
			//mock.expects('callAPI').twice().withArgs(Social.facebook_url + url);
			
			//Social.getFacebookCount(url);

			expect(Social.getFacebookCount(url)).to.eventually.equal(10).notify(done);

			// verifie que tout ce qui a été demandé a été utilisé
			mock.verify();
			mock.restore();

		})
	})

})