window.onload = function(){
	var slides = document.getElementsByClassName("slides")[0];
	var sli_co1 = document.getElementsByClassName("sli_co1")[0];
	
	var sli = document.getElementsByClassName("sli");//集体样式
	var sliLength = sli.length;
	var timer = null;
	var num = 0;
	var now = 0;
	var onoff = true;
	var banLi = document.querySelector(".ban_Ar");
	var bSpan = banLi.getElementsByTagName("span");
	var banner = document.querySelector(".banner");
	var bA = document.querySelector(".banner").querySelectorAll("ul li a");
	
	slides.innerHTML += slides.innerHTML;
	for(var i=0;i<sli.length;i++){
		sli[i].style.left = i*100+"%";
	}
	timer = setInterval(setfn,3000);
	function setfn(){
		num++;
		if(num==6){
			num=0;
			slides.style.transition = 'none';
			slides.style.transform = "translateX(0px)";
		}else{
			slides.style.transition = '3s';
			slides.style.transform = "translateX(-"+slides.offsetWidth*num+"px)";
		}
		for(var i=0;i<bA.length;i++){
			bA[i].style.background = "url(img/banner_btn.png)no-repeat left center";
		};
		if(num==5){
			bA[0].style.background = "url(img/banner_btn.png)no-repeat right center";
		}else{
			bA[num].style.background = "url(img/banner_btn.png)no-repeat right center";
		}
	}//轮播
	function setfnright(){
		num--;
		for(var i=0;i<bA.length;i++){
			bA[i].style.background = "url(img/banner_btn.png)no-repeat left center";
		};
		if(num==0){
			num == 1;
		}
		if(num==-1){
			num=5;
			slides.style.transition = 'none';
			slides.style.transform = "translateX(-"+slides.offsetWidth*num+"px)";
			setTimeout(function(){
				num=4;
				slides.style.transition = '3s';
				slides.style.transform = "translateX(-"+slides.offsetWidth*num+"px)";
				bA[num].style.background = "url(img/banner_btn.png)no-repeat right center";
			},20);
		}else{
			slides.style.transition = '3s';
			slides.style.transform = "translateX(-"+slides.offsetWidth*num+"px)";
			bA[num].style.background = "url(img/banner_btn.png)no-repeat right center";
		}
	}
	banner.onmousemove = function(){
		clearInterval(timer);
	}
	banner.onmouseout = function(){
		timer = setInterval(setfn,3000);
	}
	sub();
	function sub(){
		for(var i=0;i<bA.length;i++){
			bA[i].index = i;
			bA[i].onclick = function(){
				for(var j=0;j<bA.length;j++){
					bA[j].style.background = "url(img/banner_btn.png)no-repeat left center";
				};
				bA[this.index].style.background = "url(img/banner_btn.png)no-repeat right center";
				slides.style.transition = '3s';
				slides.style.transform = "translateX(-"+slides.offsetWidth*this.index+"px)";
				num = this.index;
			}
		}
	}
	bSpan[1].onclick = function(){
		if(onoff){
			setfn();
			onoff=false;
			setTimeout(function(){
				onoff = true;
			},3000)
		}
	}
	bSpan[0].onclick = function(){
		if(onoff){
			setfnright();
			onoff=false;
			setTimeout(function(){
				onoff = true;
			},3000)
		}
	}
	//不能用下标来定位置











//旋转 , 可写成难点
	var platUl = document.querySelectorAll(".platCa .platCa_con ul li");
	
	for(var i=0;i<platUl.length;i++){
		platUl[i].index = i;
		platUl[i].onmousemove = function(){
			var pl1 = platUl[this.index].firstElementChild;
			var pl2 = platUl[this.index].firstElementChild.nextElementSibling;
			pl1.style.transform = "rotateY(90deg)";
			pl1.style.transition = ".1s";
			pl2.style.transform = "rotateY(0deg)";
			pl2.style.transition = ".1s .1s";
		}
		platUl[i].onmouseout = function(){
			var pl1 = platUl[this.index].firstElementChild;
			var pl2 = platUl[this.index].firstElementChild.nextElementSibling;
			pl1.style.transform = "rotateY(0deg)";
			pl1.style.transition = ".1s .1s";
			pl2.style.transform = "rotateY(90deg)";
			pl2.style.transition = ".1s";
		}
	}
	var cont = document.querySelectorAll('.solution .solu_cont ul li');
	var tab = document.querySelector(".solution .solu_Window .solu_Content");
	var tab_s = tab.getElementsByClassName("tab_text")[0];
	
	var num = 0;
	var tHeight = tab_s.offsetHeight;
	for(var i=0;i<cont.length;i++){
		cont[i].index = i;
		
		cont[i].onmouseover = function(){
			for(var j=0;j<cont.length;j++){
				cont[j].className = "";
			}
			cont[this.index].className = "bd";
			num = this.index;
			tab.style.transition = "1s";
			tab.style.transform = "translateY(-"+num*tHeight+"px)";
		}
	}
	
	
	
	
	



}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	