const DEBUG = true;
const BASEDIR_DEV = "https://server.adekz.com/web/casadebolospdv";
const BASEDIR_PRO = "https://server.adekz.com/web/casadebolospdv";
const API = "http://192.168.0.102/api";
const API2 = "https://server.adekz.com/web/metaraphael/api";
const BASEDIR = DEBUG ? BASEDIR_DEV : BASEDIR_PRO;


var config = {
	debug: DEBUG,
    isDebuggingEnabled: (typeof atob !== 'undefined'), // verifica se o debugging esta ativo ou não
	basedir: BASEDIR,
	basedir_foto: BASEDIR + '/images/upload/',
	role: 1,
	api: API,
	api2: API2
	
	}


if (config.isDebuggingEnabled) {
    global.log = console.log;
} else {
    console.log = global.log = () => {};
}

global.config = config;
export var config;
