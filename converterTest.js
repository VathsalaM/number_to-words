var Tests = require('./tests');
var Converter = require('./converter');
var tests = new Tests();
var converter = new Converter();

const Equal = 'equal';

// tests.add('1 should return one',Equal,'One',converter.convert(1));
tests.add('12 should return twelve',Equal,'Twelve',converter.convert(12));
// tests.add('20 should return twenty',Equal,'Twenty',converter.convert(20));
// tests.add('52 should return fifty two',Equal,'Fifty two',converter.convert(52));
// tests.add('100 should return hundred',Equal,'One hundred',converter.convert(100));
// tests.add('101 should return hundred and one',Equal,'One hundred and one',converter.convert(101));
// tests.add('1200 should return one thousand two hundred',Equal,'One thousand two hundred',converter.convert(1200));
// tests.add('1234 should return one thousand two hundred and thirty four',Equal,'One thousand two hundred and thirty four',converter.convert(1234));
// tests.add('10000 should return ten thousand',Equal,'Ten thousand',converter.convert(10000));
// tests.add('9999999 should return nine million nine hundred and ninty nine thousand nine hundred and ninty nine',Equal,'Nine million nine hundred and ninty nine thousand nine hundred and ninty nine',converter.convert(9999999));

var test_num = process.argv[2];
test_num?tests.execute(test_num):tests.execute_all();