// A function created in twilio, in order to response the incoming messages from the user to the twilio number

exports.handler = function(context, event, callback) {
  console.log(`Incoming message: ${event.Body}`);

	let twiml = new Twilio.twiml.MessagingResponse();
  twiml.message('Thanks for Sharing!');

  console.log(`TwiML was ${twiml}`);
  return callback(null, twiml);
};
