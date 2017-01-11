var ones = {
	'0':'zero',
	'1':'one',
	'2':'two',
	'3':'three',
	'4':'four',
	'5':'five',
	'6':'six',
	'7':'seven',
	'8':'eight',
	'9':'nine'
};

var tens = {
	'11':'eleven',
	'12':'twelve',
	'13':'thirteen',
	'14':'fourteen',
	'15':'fifteen',
	'16':'sixteen',
	'17':'seventeen',
	'18':'eighteen',
	'19':'ninteen',
}

var ten_holder = {
	'0':'',
	'1':'ten',
	'2':'twenty',
	'3':'thirty',
	'4':'forty',
	'5':'fifty',
	'6':'sixty',
	'7':'seventy',
	'8':'eighty',
	'9':'ninty'
}

var ones_place = function(ones_value){
	return ones[ones_value];
}

var tens_place = function(tens_value,ones_value){
	return tens[tens_value+ones_value] || ten_holder[tens_value];
}

var hundreds_place = function(hundres_value){
	return  (hundres_value!='0')?ones_place(hundres_value)+' hundred':'';
}

var thousands_place = function(thousands_value){
	return thousands_value+' thousand';
}

var millions_place = function(millions_value){
	return millions_value+' million';
}

var identityfunc = function(value){
	return value;
}

var placeHolders = {
	identityfunc: identityfunc,
	hundreds_place: hundreds_place,
	thousands_place: thousands_place,
	millions_place: millions_place
}

var place = {
	holders : placeHolders,
	arrangements : [identityfunc,thousands_place,millions_place],
	hundreds_place_arrangment : [ones_place,tens_place,hundreds_place] 
};

module.exports = place;