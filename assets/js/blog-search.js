
window.onload = function(){
	const input = document.getElementById("blogSearch");
	input.addEventListener("input", onSubmit, {once: false});
}


function onSubmit(){
	console.log("should do multiple times");
}