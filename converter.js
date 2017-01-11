var place = require('./placeHolders.js');

var reverse_str = function(str){
	return str.split('').reverse().join('');
}

var remove_empty_strs = function(str){
	return str != '';
}

var split_number = function(number){
	return reverse_str(number).match(/.{1,3}/g).reverse().map(reverse_str);
}

var get_word = function(num,i,list){
	return place.hundreds_place_arrangment[i](num,list[i-1])
}

var format_hundreth_place = function(place_values){
	place_values[0] = (place_values.length>1)?place_values[0]+' and':place_values[0];
	return place_values;
}

var convert_to_hundreds = function(number_str){
	var reversed_str = number_str.split('').reverse();
	var hundreds_str = reversed_str.map(get_word)
	hundreds_str = (reversed_str[1]=='1')?hundreds_str.slice(1,hundreds_str.length):hundreds_str;
	hundreds_str =  hundreds_str.filter(remove_empty_strs).reverse()
	return (reversed_str.length==3)?format_hundreth_place(hundreds_str).join(' '):hundreds_str.join(' ');
}

var add_place_holder = function(value,i){
	return place.arrangements[i](value);
}

var add_place_values = function(divisions){
	var values = divisions.reverse().map(add_place_holder)
	return values.filter(remove_empty_strs).reverse().join(' ');
}

var capitalize_first_letter = function(str){
	return str[0].toUpperCase() + str.substr(1);
}

var Converter = function(){
	this.convert = function(number){
		var number_str = number.toString();
		var number_divisions = split_number(number_str);
		var hundreds_divisions = number_divisions.map(convert_to_hundreds);
		var word = add_place_values(hundreds_divisions);
		return capitalize_first_letter(word);
	}
}

module.exports = Converter;