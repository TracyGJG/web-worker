console.log('Starting Web Worker');

function callUpdate(webScript) {
	importScripts(webScript);
	return update;
}

let scriptSelector = 0;
let webScripts;

onmessage = e => {
	if (webScripts) {
		console.log('Web Worker', e.data);
		postMessage(callUpdate(webScripts[scriptSelector])(e));
		scriptSelector = (scriptSelector + 1) % webScripts.length;
	} else {
		console.log('Web Worker - scripts loaded');
		webScripts = e.data;
	}
};
