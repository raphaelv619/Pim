
// const API2 = "http://***.***.*.***/api";
const API = "https://teste/api";
const API2 = "https://server.adekz.com/web/metaraphael/api";

var config = {
	api: API,
	api2: API2,
	}


window.__DEV__ = config.debug;
window.global = window;
global.show = () => {};
global.hide = () => {};


global.config = config;
export var config;
