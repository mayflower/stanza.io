'use strict';

exports.VERSION = '__STANZAIO_VERSION__';

exports.JID = require('node-xmpp-jid');
exports.Client = require('./lib/client');


exports.createClient = function (opts) {
    var client = new exports.Client(opts);
    client.use(require('./lib/plugins'));

    return client;
};
