// Here, all the messages send to the twilio number are gathered & pushed into gallery[] one by one with attributes source, description, alt, thumbnailWidth
// Maybe sent multiple images in a single message, so carefully handling them by iterating over it.

exports.handler = async function(context, event, callback) {
  const client = context.getTwilioClient();

  const gallery =[];

  const messages = await client.messages.list({to: context.TWILIO_NUMBER});

  for(const mes  of messages){
    const pics = await mes.media().list();
    for(const pic of pics){
      gallery.push({
        src:"https://api.twilio.com"+pic.uri.replace(".json",""),
        description: mes.body,
        alt: mes.body,
        thumbnailWidth: "200px",
      });
    }
  }

  return callback(null, gallery);
};
