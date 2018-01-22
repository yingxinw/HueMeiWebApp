window.onscroll=function(){
	var top=document.documentElement.scrollTop||document.body.scrollTop;
	var Conversation=document.getElementsByClassName("container-advisory")[0].getElementsByTagName("img");
	if(top>2300){
		setTimeout(function(){
			for(var i=0;i<Conversation.length;i++){
				Conversation[i].style.display="block";
			}
		},100)
	}
}
window.onload=function(){
	var International=document.getElementById("container-International");
	var InternationalItem=International.getElementsByTagName("li");
	for(var i=0;i<InternationalItem.length;i++){
		InternationalItem[i].style.width=document.body.clientWidth+"px";
	}
	
}
