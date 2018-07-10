var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'JDoe';
    var text = 'Hi. This is a message';
    var message = generateMessage(from, text );
    expect(message.from).toBe('JDoe');
    expect(message.text).toBe('Hi. This is a message');
    expect(typeof message.createdAt).toBe('number');
  });
})