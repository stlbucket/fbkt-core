"use strict";
const Promise = require('bluebird');
const R = require('ramda');
const fbkt = require('../../../fbkt');

module.exports = ()=>{
	console.log('==========INIT SERVER EXTENSIONS==========');

	const extensions = fbkt().getComponentFromAllLibs('serverExtensions');

	return Promise.each(extensions, (ext)=>{
		return ext();
	});
	
	// var serverExtensionsAreInitialized = [];
	//
	// _.forOwn(fbkt().fbktLibs, function(lib){
	// 	if (is.array(lib.serverExtensions)){
	// 		_.forEach(lib.serverExtensions, function(serverExtension){
	// 			serverExtensionsAreInitialized.push(serverExtension);
	// 		});
	// 	}
	// });
	//
	// return sequence(serverExtensionsAreInitialized);
};