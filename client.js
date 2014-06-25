#!/usr/bin/node
// CONSTANTES - ESSES TOKENS SÃO INVÁLIDOS, SOMENTE PARA TESTE
var API_ADRESS = 'api.twitter.com';
var CONSUMER_KEY = '4cebTdGotqP0O26RA5mrNTfDj';
var TOKEN = '2525968886-7WW92M65AuwgQg9X8Zv86jNV7DRfpm8TiZwh67f';

// Modules
var util = require('util');
var format = util.format;
var stringify = require('querystring').stringify;

// require('./libs/uris.js');
// Map
var maps = require('./maps');
// Random generator
var random = require('./random');

// Client class
function Client() {
  
  // Auth header generator
  this.generateAuthHeader = function(data) {
    var map = maps.create();
    
    map.put('oauth_consumer_key', CONSUMER_KEY);
    // nonce é um numero único para identificar a request
    map.put('oauth_nonce', random.generateEscapedString());
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
  };
  
};

function main(params) {
	var sys = require('sys');
	var http = require('http');

	// CONSTANTS
	var print = console.dir;
	
  // Options do programa (command line)
	var Opts = {};

	// CODE
	sys.puts('Starting client...');
  var c = new Client();
  sys.puts(util.inspect(c.generateAuthHeader()));
	//sys.puts('Dir:');
	//console.dir(process.argv);

	console.log('Arguments: [%s]', process.argv);

	Opts.userName = process.argv[2];
}

main();
