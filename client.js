#!/usr/bin/node
// CONSTANTES - ESSES TOKENS SÃO INVÁLIDOS, SOMENTE PARA TESTE
var API_ADRESS = 'api.twitter.com';
var CONSUMER_KEY = '4cebTdGotqP0O26RA5mrNTfDj';
var TOKEN = '2525968886-7WW92M65AuwgQg9X8Zv86jNV7DRfpm8TiZwh67f';
var format = require('util').format;
var stringify = require('querystring').stringify;

require('./libs/uris.js');
var Map = require('./map');


function generateAuthHeader(data) {
	var map = new Map();
	
	map.put('oauth_consumer_key', CONSUMER_KEY);
	// nonce é um numero único para identificar a request
	map.put('oauth_nonce', '123'/*generateNOnce()*/);
	// Signature é gerada gerando um hash de todos os parâmetros
	map.put('oauth_signature', '456'/*Generate sig*/);
	map.put('oauth_signature_method', 'HMAC-SHA1');
	map.put('oauth_timestamp', Date.now().toString());
	map.put('oauth_token', TOKEN);
	map.put('oauth_version', '1.0');
	
	var keys = map.keys();
	var values = new Array();
	
	keys.forEach(function(entry) {
		values.push(format('%s="%s"', entry, map.get(entry)));
	});
	
	var header = {
		'Authorization': 'OAuth '+values.join(',')
	};
	
	return header;
}

function main(params) {
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
