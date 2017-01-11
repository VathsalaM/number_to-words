var assert = require('assert');

var Test = function(testNo,message,condition,expected,actual){
	this.testNo = testNo;
	this.message = message;
	this.condition = condition;
	this.expected = expected;
	this.actual = actual;
	this.execute = function(){
		var result;
		try{
			result = assert[condition](expected,actual);
		}catch(err) {
			result = err;
		}
		return result?'\n\t'+result:'pass';
	};
	this.represent = function(){
		console.log("\n"+this.testNo+". "+this.message+" : "+this.execute());
	}
}

var Tests = function(){
	this.count = 1;
	this.list = [];
	this.increment_count=function(){
		this.count++;
	};
	this.add = function(message,condition,expected,actual){
		var test = new Test(this.count,message,condition,expected,actual);
		this.list.push(test);
		this.increment_count();
	};
	this.execute = function(testNo){
		this.list[parseInt(testNo-1)].represent();
	};
	this.execute_all = function(){
		this.list.forEach(function(test){
			test.represent();
		});
	};
};

module.exports = Tests;