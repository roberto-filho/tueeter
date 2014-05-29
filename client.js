#!/usr/bin/node
// CONSTANTESSSSS
var API_ADRESS = 'api.twitter.com';
var CONSUMER_KEY = '4cebTdGotqP0O26RA5mrNTfDj';
var TOKEN = '2525968886-7WW92M65AuwgQg9X8Zv86jNV7DRfpm8TiZwh67f';
var format = require('util').format;
var stringify = require('querystring').stringify;
require('./libs/uris.js');


function generateAuthHeader() {
	var oAuthStringFormat = 'OAuth '+
		'oauth_consumer_key="%s",'+
		'oauth_nonce="%s",'+
		'oauth_signature="%s",'+
		'oauth_signature_method="%s",'+
		'oauth_timestamp="%s",'+
		'oauth_token="%s",'+
		'oauth_version="1.0"';

	var header = {
		'Authorization': format(oAuthStringFormat, 
			CONSUMER_KEY,
			generateNOnce(),
			)
	};
	
	return header;
}

function main(param) {
	var sys = require('sys');
	var http = require('http');

	// CONSTANTS
	var print = console.dir;
	
	var Opts = {};

	// CODE
	sys.puts('Starting client...');

	//sys.puts('Dir:');
	//console.dir(process.argv);

	console.log('Arguments: [%s]', process.argv);

	Opts.userName = process.argv[2];
}

main();
