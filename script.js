//your JS code here. If required.
document.addEventListner("DOMContentLoaded",function(){
	let target=document.getElementById("level");
	if(target){
		let domLevel=0;
		let currentElement=tareget;
		while(currentElement!==document.documentElement){
			currentElement=currentElement.parentElement;
			domLevel++;
		}
		alert("The level of the element is: " + domLevel);
	}
})