import webScripts from './webScripts.json' assert { type: 'json' };

const WebWorker = new Worker('webworker.js');
let count = 0;

WebWorker.postMessage(webScripts);
updateShowCount();

function updateShowCount() {
	showCount.textContent = count;
}

btnIncCount.addEventListener('click', () => {
	WebWorker.postMessage(count);
});

WebWorker.onmessage = e => {
	count = e.data;
	updateShowCount();
};
