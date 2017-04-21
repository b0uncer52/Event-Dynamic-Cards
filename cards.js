var creations = document.getElementById('creations');
var boxes = [];
function createbox(event) {
	var dStamp = "delete" + event.timeStamp;
	var cStamp = "create" + event.timeStamp;
	var box = {id: event.timeStamp, btn: dStamp, text: cStamp};
	boxes.push(box);
	var content = document.createElement("div");
	content.innerHTML = `<div class="card" id ="${cStamp}">${document.getElementById('input').value}<input type="button" value="Delete" id="${dStamp}"></div>`;
	creations.appendChild(content);
	var deletebtn = document.getElementById("${dStamp}");
	document.getElementById(dStamp).addEventListener("click", function(event) {
		document.getElementById(cStamp).outerHTML = "";
	});
}

document.getElementById('create').addEventListener("click", function(event) { createbox(event);});