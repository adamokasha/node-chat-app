var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'JDoe';
    var text = 'Hi. This is a message';
    var message = generateMessage(from, text );
    expect(message.from).toBe('JDoe');
    expect(message.text).toBe('Hi. This is a message');
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'A_User';
    var longitude = 25;
    var latitude = 25;
    var message = generateLocationMessage(from, longitude, latitude);
    expect(message.from).toBe(from);
    expect(message.url).toBe('https://www.google.com/maps?q=25,25');
  });
});