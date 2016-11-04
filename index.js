let Promise = require('bluebird');
let Fbkt = require('./Fbkt');
let __fbkt = null;
const baseCommandMap = require('./Fbkt/coreLibs/fbktServer/resolveCommandMap/baseCommandMap');

module.exports = {
	baseCommandMap:	baseCommandMap,
	runServer: (config, appLibs)=> {
		return Fbkt(config, appLibs);
	}
};


