var box = document.getElementById("box");
	var naList = document.getElementsByTagName("li");
	var slider = document.getElementById("slider");
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var x = 1;
	var timer;
	var moving = 0;
	right.onclick = function (){
		if(moving == 1){
			return;
		}
		moving = 1;
	    x++;
		animate(slider,{left: -1200 * x},function(){
			if(x > 5){
			    slider.style.left = -1200 + "px";
			    x = 1;
		    }
		    moving = 0;
	   });
		showButton(x);
	}
	left.onclick = function (){
		if(moving == 1){
			return;
		}
		moving = 1;
		x--;
		animate(slider,{left: -1200 * x},function(){
			if(x == 0){
				slider.style.left = -6000 + "px";
				x = 5;
			}
			moving = 0;
		});
		showButton(x);
	}
	function next(){
		if(moving == 1){
			return;
		}
		moving = 1;
	    x++;
		animate(slider,{left: -1200 * x},function(){
			if(x > 5){
			    slider.style.left = -1200 + "px";
			    x = 1;
		    }
		    moving = 0;
	   });
		showButton(x);
	}
	timer = setInterval(next,3000);
	box.onmouseover = function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}
	box.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer = setInterval(next,3000);
	}
	for(var i = 0;i < naList.length; i++){
		naList[i].index = i;
		naList[i].onclick = function(){
			x = this.index + 1;
			animate(slider,{left:-1200 * x});
			showButton(x);
		}
	}
	function showButton(x){
		for(var i = 0; i < naList.length; i++){
			naList[i].style.background = "#ccc";
		}
		if(x == 6){
			naList[0].style.background = "red";
		}
		if(x == 0){
			naList[4].style.background = "red";
		}
		else{
			naList[x - 1].style.background = "red";
		}
	}