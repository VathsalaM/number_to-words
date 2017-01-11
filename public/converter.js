var convert_to_words = function(){
	var number = $("#number").val();
  	$.post('/convert', {number:number}, function(res) {
  	 	$("#words").text(res.words.toString());
  	 	console.log(res.words.toString())
  	}, 'json');
};