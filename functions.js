/**
 *  Speech Recognition sample
 *
 *  This Function builds a simple IVR menu. Learn more about <Gather> at:
 *  https://www.twilio.com/docs/api/twiml/gather
 */
exports.handler = function(context, event, callback) {
  const question = "オウム返しをしますよ。";
  const timeout = "すみません、もう一度お願いします。";
  console.log(event.SpeechResult);
  let result = event.SpeechResult || '';
  let sayParams = {};
  sayParams.language = "ja-JP";
  sayParams.voice = "alice";
  let gatherParams = {};
  gatherParams.input = "speech";
  gatherParams.language = "ja-JP";
  gatherParams.timeout = "2";
  let twiml = new Twilio.twiml.VoiceResponse()
  if (result !== '') {
    // 変換成功
    twiml.gather(gatherParams).say(sayParams, result);
    gatherParams.timeout = "5";
    twiml.gather(gatherParams).say(sayParams, timeout);
  } else {
    twiml.gather(gatherParams).say(sayParams, question);
    gatherParams.timeout = "5";
    twiml.gather(gatherParams).say(sayParams, timeout);
  }
  callback(null, twiml)
};
