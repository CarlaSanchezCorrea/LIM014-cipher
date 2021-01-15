
var previousValue = localStorage.textarea == undefined ? '' : localStorage.textarea;
document.getElementById('textarea').value = previousValue;

function clear() {
	document.getElementById('textarea').value='';
}
