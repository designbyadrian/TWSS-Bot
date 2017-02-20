'use strict'

const request = require('request')
const striptags = require('striptags')
const twss = require('twss')

module.exports = (slapp) => {

  twss.threshold = 0.8;

  slapp.message('.*', (msg) => {

    const sentences = msg.body.event.text.split('.');
    const lastSentence = sentences[sentences.length-1];
    const sentenceParts = lastSentence.split(',');
    const part = sentenceParts[sentenceParts.length-1];

    if(twss.is(part)) {
      console.log(msg.body.event.text+": "+twss.prob(msg.body.event.text));
      msg.say("That's what she said!");
    }

  }) // message
}
