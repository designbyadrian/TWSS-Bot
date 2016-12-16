'use strict'

const request = require('request')
const striptags = require('striptags')
const twss = require('twss')

module.exports = (slapp) => {

  twss.threshold = 0.8;

  slapp.message('.*', (msg) => {

    console.log(twss.is(msg.body.event.text));
    console.log(twss.prob(msg.body.event.text));

    if(twss.is(msg.body.event.text)) {
      msg.say("That's what she said!");
    }

  }) // message
}
