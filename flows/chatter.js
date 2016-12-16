'use strict'

const request = require('request')
const striptags = require('striptags')
const twss = require('twss')

module.exports = (slapp) => {

  twss.threshold = 0.8;

  slapp.message('.*', (msg) => {

    if(twss.is(msg.body.event.text)) {
      console.log(msg.body.event.text+": "+twss.prob(msg.body.event.text));
      msg.say("That's what she said!");
    }

  }) // message
}
